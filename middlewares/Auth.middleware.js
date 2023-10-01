const jwt = require('jsonwebtoken');

/******* DEFINE MIDDLEWARE FOR AUTHORIZAION, VERIFICATION ETC. **************/
let middleware = (req, res, next) => {
    console.log("Middleware Hit");
    next();
}


/******* EXPORT MIDDLEWARE **********/
module.exports = {
    middleware
} 