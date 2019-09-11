const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Home = require('./client/components/Home').default;
const app = express();

app.get('/' , (req,res) => {
    const content = ReactDOMServer.renderToString(<Home />);
    res.send(content);
});

app.listen(3000 , () => {
    console.log('listening to port 3000');
})