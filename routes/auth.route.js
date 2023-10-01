/********* IMPORT USER CONTROLLER AND MIDDLEWARE TO DEFINE ROUTES **********/
const { userController } = require('../controllers/user.controller');
const { middleware } = require('../middlewares/Auth.middleware');

/********  DEFINE ROUTES HERE AND PROVIDE METHODS FOR MIDDLEWARES, CONTROLLERS ETC. ********/
module.exports = function(app) {
    app.get("/getApi", middleware,userController)
}


