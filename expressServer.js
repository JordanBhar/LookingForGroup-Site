const path = require('path');
const fs = require('fs')
const express = require("express")
const app = express()
let postCreationAlert = require('alert');
const { status } = require('express/lib/response');
//https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type used this to figure out how to get CSS and JavaScript validation back {learning}
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JavaScript')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }))


app.get("/DragonrealmPostLFG", function (req, res) { res.sendFile(`${__dirname}/views/LookingForGroupForum.html`) });

app.get("/postsData", function(req,res){
    res.sendFile(`${__dirname}/data/posts.json`)
    //console.log(req.query.minage)
})


app.post("/DragonrealmPostLFG", function(req , res){

    let newPost = { 
    "PostTitle":  req.body.title, 
    "ActivityDescription": req.body.description, 
    "AmountOfPlayers": req.body.playerNumber, 
    "LevelReq": req.body.levelRequirement, 
    "ActivityType":  req.body.activityType , 
    "PlayerOne": req.body.playerType1, 
    "PlayerTwo": req.body.playerType2,
     "PlayerThree": req.body.playerType3,
      "PlayerFour": req.body.playerType4};
    //read json file
    fs.readFile('data/posts.json', function(err, content){
        let curObj = JSON.parse(content);
        console.log(curObj)
        curObj.createdPosts.push(newPost);
        const finalString = JSON.stringify(curObj);
        fs.writeFile('data/posts.json', finalString, function(err){
            if(err) throw err;
            //https://www.youtube.com/watch?v=p2JI2PrvleU
            postCreationAlert("Created Post")
            res.send("post Created")
            //res.redirect('/DragonrealmPostLFG') 
        });
    });
} );

app.listen(5556);