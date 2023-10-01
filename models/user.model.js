/******** IMPORT MONGOOSE ******/
const mongoose = require('mongoose');

/******** DEFINE MODEL ********/
const userSchema = new mongoose.Schema({
    // DEFINE FIELDS
})

/******** EXPORT MODEL ***************/
module.exports = mongoose.model('User', userSchema);