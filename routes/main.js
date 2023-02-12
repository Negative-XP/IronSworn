const express = require('express')  //Declares that we need to use express
const router = express.Router() //Declares that express needs to use routers
const homeController = require('../controllers/home') //Shows the path to the home controller
console.log('hello')
router.get('/', homeController.getIndex) //Default path for the home page


module.exports = router //This is the callback function 
