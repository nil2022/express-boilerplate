/********* IMPORTING USER MODEL FOR QUERIES AND UPDATION *******/
const User = require('../models/user.model');

/****** DEFINE YOUR BUSINESS LOGIC HERE, HOW YOU PROCESS USER REQUEST AND DATA **********/
exports.userController = async (req, res) => {
    console.log('Controller Hit');
    res.send('User Controller');
}