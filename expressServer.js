const path = require('path');
const fs = require('fs')
const express = require("express")
const app = express()
//https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type used this to figure out how to get CSS and JavaScript validation back {learning}
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JavaScript')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }))


app.get("/DragonrealmPostLFG", function (req, res) { res.sendFile(`${__dirname}/views/LookingForGroupForum.html`) });

app.get("/InformationPage", function (req, res) { res.sendFile(`${__dirname}/views/InformationPage.html`) });


app.listen(5556);