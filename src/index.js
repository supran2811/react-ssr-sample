import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchRoutes } from 'react-router-config';

import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore  from './helpers/createStore';

const app = express();

app.use(express.static("public"));

app.get('*' , (req,res) => {

    const store = createStore();

    Promise.all(matchRoutes(Routes , req.path).map(( { route : { loadData } }  ) => {
        return loadData ? loadData(store) : null;
    })).then(() => {
        res.send(renderer(req,store));
    }).catch(err => {
        console.log(err);
    });

});

app.listen(3000 , () => {
    console.log('listening to port 3000');
})