const { response } = require('express');
const express = require("express")
const app = express()
const postAddModule = require("./local_modules/postAddModule")
app.use(express.urlencoded({ extended: true })) 








app.listen(5556);