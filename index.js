/******* THIS IS MAIN INDEX.JS FILE TO RUN THE SERVER, CONNECT TO DATABASE AND IMPORT ROUTES ******/

require('dotenv').config() //needed to fetch data from .env file
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

/********* HOME PAGE ROUTE HANDLER **********/
app.get('/', (req, res) => {
    console.log('Home Page Hit!');
    res.status(200).send('Express Boilerplate')
  });

/***** START LISTENING TO REQUESTS ON PORT SPECIFIED **********/
app.listen(8000, () => {
    console.log(`Listening on port 8000`);
})

/******* IMPORT API's FROM ROUTES FOLDER *********/
require("./routes/auth.route")(app);