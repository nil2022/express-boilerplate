/******* THIS IS MAIN INDEX.JS FILE TO RUN THE SERVER, CONNECT TO DATABASE AND IMPORT ROUTES ******/

require('dotenv').config() //needed to fetch data from .env file
const dbConfig = require("./configs/db.config")
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

/********* HOME PAGE ROUTE HANDLER **********/
app.get('/', (req, res) => {
    console.log('Home Page Request served!');
    res.status(200).send('Express Boilerplate')
  });

const PORT = process.env.PORT || 8001
/***** START LISTENING TO REQUESTS ON PORT SPECIFIED **********/
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

/******* IMPORT API's FROM ROUTES FOLDER *********/
let authRoute = require("./routes/auth.route");
authRoute(app)