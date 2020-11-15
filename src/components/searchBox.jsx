import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {getNews} from '../services/headlines';
import {IoIosShareAlt} from 'react-icons/io';
import {FiPlus} from 'react-icons/fi';

const Div = styled.div`
    .grid-div {
        padding: 2em;
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 2em;
        row-gap: 2em;
    }
    .grid-card {
        background-color: white;
        padding: 0.5em;
        border-radius: 8px;
    }
    .info-div {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.8em;
    }
    .author {
        font-size: 0.9em;
        font-weight: 500;
    }
    .publishedAt {
        font-size: 0.7em;
    }
    .flex-div {
        display: flex;
        justify-content: space-between;
    }
    .headline-img {
        border-radius: 8px;
    }
    .intro-div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        font-size: 1.8em;
        font-weight: 500;
        color: #091A20;
    }
    h2 {
        font-size: 1.2em;
        font-weight: 700;
        color: #091A20;
    }
    h3 {
        margin-top: 2em;
        margin-bottom: 0em;
        font-size: 2em;
        text-align: center;
    }
`;

const SearchBox = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let mounted = true;
        getNews()
            .then(articles => {
                if(mounted) {
                    setData(articles)
                }
            })
            return () => mounted = false;
    }, [])


    return (
        <Div>
            <div className="intro-div">
            {/* <h1>Search and see what's happening around the world</h1> */}
            </div>
            <h3>Top Headlines</h3>
            <div className="grid-div">
            {data && data.map((article) => {
                const myDate = new Date(article.publishedAt).toDateString();
                return (
                <div className="grid-card" key={article.title}>
                   
                    <img className="headline-img" src={article.urlToImage} alt={article.title} width="100%" height="200em" />
                    <h2>{article.title}</h2>
                    {/* <p>{article.description}</p> */}
                    <div className="flex-div">
                        <div className="info-div">
                            <span className="author">{article.author}</span>
                            <span className="publishedAt">{myDate}</span>
                        </div>
                        <div>
                            <IoIosShareAlt size="1.5em" color="#091A20" style={{marginRight: '0.4em'}}/>
                            <FiPlus  size="1.5em" color="#091A20"/>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
            
        </Div>
    )
}

export default SearchBox;
