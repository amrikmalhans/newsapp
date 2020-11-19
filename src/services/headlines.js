import axios from "axios";
require('dotenv').config()

const REACT_APP_API_KEY=process.env.REACT_APP_API_KEY;

const URL = `https://newsapi.org/v2/everything?q=coding&apiKey=${REACT_APP_API_KEY}`;

export const getNews = async () => {
    try {
        const response = await axios.get(URL);
        const articles = response.data.articles;
        console.log('====================================');
        console.log(articles);
        console.log('====================================');
        return articles;
    } catch (err) {
        console.log(err);
    }
}
