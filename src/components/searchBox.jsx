import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {getNews} from '../services/headlines';

const styledDiv = styled.div`
    .grid-div {
        display: grid;
        grid-template-columns: auto auto auto;
    }
`;

const SearchBox = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let mounted = true;
        getNews()
            .then(articles => {
                if(mounted) {
                    console.log('====================================');
                    console.log(articles);
                    console.log('====================================');
                    setData(articles)
                }
            })
            return () => mounted = false;
    }, [])


    return (
        <styledDiv>
        <h1>Search and see what's happening around the world</h1>
            <div className="grid-div">
            {data && data.map((article) => {
                return <div key={article.title}>
                    <h2>{article.title}</h2>
                    <img src={article.urlToImage} alt={article.title} width="100%" height="auto" />
                    <p>{article.description}</p>
                </div>
            })}
            </div>
            
        </styledDiv>
    )
}

export default SearchBox;
