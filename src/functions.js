const admin = require('firebase-admin');
const serviceAccount = require('./serviceaccount.json');
const NewsAPI = require('newsapi');
require('dotenv').config()
const newsapi = new NewsAPI(process.env.REACT_APP_API_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
  
  const db = admin.firestore()
  
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'coding',
  language: 'en',
  page: 2
}).then(response => {
  console.log(response);
  db.collection('headlines').doc('coding').set(response);
});
