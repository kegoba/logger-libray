const route = require('express').Router()

const userController = require("../controller/userController")





route.post("/login", userController.loginController)






module.exports= route


