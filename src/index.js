import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Home from './client/components/Home';
import renderer from './helpers/renderer';
import createStore  from './helpers/createStore';

const app = express();

app.use(express.static("public"));

app.get('*' , (req,res) => {

    const store = createStore();

    res.send(renderer(req,store));
});

app.listen(3000 , () => {
    console.log('listening to port 3000');
})