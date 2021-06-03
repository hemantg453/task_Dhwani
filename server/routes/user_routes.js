var express = require("express");

var userData = require('../controllers/user_Controller')
var user_data = new userData()
var data_Route = express.Router()


// --------------------------INSERT_DATA--------------------------------------------
data_Route.post('/add', user_data.post_data)
// ----------------------------GET_DATA------------------------------------------------
data_Route.get('/getData', user_data.get_data)
module.exports = data_Route;