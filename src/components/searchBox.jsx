import React from 'react';
import styled from 'styled-components';
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
        width: 100%;
        height: 200px;
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
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
        .grid-div {
        padding: 1em;
        display: grid;
        grid-template-columns: auto;
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
        font-size: 0.7em;
        font-weight: 500;
    }
    .publishedAt {
        font-size: 0.6em;
    }
    .headline-img {
        border-radius: 8px;
        width: 100%;
        height: auto;
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
        margin-top: 1.3em;
        margin-bottom: 0.5em;
        font-size: 1.8em;
        text-align: center;
    }
}   
`;

const SearchBox = ({data, searchValue}) => {
    
    return (
        <Div>
            <div className="intro-div">
            {/* <h1>Search and see what's happening around the world</h1> */}
            </div>
            <h3>{searchValue === "coding" ? "Top Headlines" : `Search results for '${searchValue}'`}</h3>
            <div className="grid-div">
            {data && data.map((article) => {
                // const sendData = () => {
                //     handler(article)
                // }
                const myDate = new Date(article.publishedAt).toDateString();
                // const myLink = `${encodeURIComponent(article.url)}`;
                console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
                console.log(article);
                console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
                return (
                <div className="grid-card" key={article.title}>
                   
                   <a rel="noreferrer" target="_blank" href={article.url}><img className="headline-img" src={article.urlToImage} alt={article.title} /></a>
                    <a rel="noreferrer" target="_blank" href={article.url}><h2>{article.title}</h2></a>
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
