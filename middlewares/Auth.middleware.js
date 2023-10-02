
/******* DEFINE MIDDLEWARE FOR AUTHORIZAION, VERIFICATION ETC. **************/
let middleware = (req, res, next) => {
  console.log('middleware');
      // Middleware for auth should be written here
    next();
}

/******* EXPORT MIDDLEWARE **********/
module.exports = { middleware }