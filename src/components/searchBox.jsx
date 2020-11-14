import React, { useState } from 'react';
import styled from 'styled-components';

const axios = require('axios');
require('dotenv').config()

const API_KEY=process.env.API_KEY;

const styledDiv = styled.div`
    .grid-div {
        display: grid;
        grid-template-columns: auto auto auto;
    }
`;

const SearchBox = () => {
    const URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=3bf48e7e1a5f4278b12fdacd61599b57';
    const [data, setData] = useState([]);

    const getNews = async () => {
        try {
            const response = await axios.get(URL);
            const articles = response.data.articles;
            setData(articles)
            console.log('====================================');
            console.log(articles);
            console.log('====================================');
        } catch (err) {
            console.log(err);
        }
    }

    getNews();
    
    return (
        <styledDiv>
        <h1>Search and see what's happening around the world</h1>
            <div className="grid-div">
            {data.map((article) => {
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
