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


app.post("/DragonrealmPostLFG", function(req, res) {
    const newPost = {
        "PostTitle": req.body.title,
        "ActivityDescription": req.body.description,
        "AmountOfPlayers": req.body.playerNumber,
        "LevelReq": req.body.levelRequirement,
        "ActivityType": req.body.activityType,
        "PlayerOne": req.body.playerType1,
        "PlayerTwo": req.body.playerType2,
        "PlayerThree": req.body.playerType3,
        "PlayerFour": req.body.playerType4
    };

    // Read JSON file
    fs.readFile('data/posts.json', function(err, content) {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("An error occurred while reading the file.");
        }

        let curObj;
        try {
            curObj = JSON.parse(content);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            return res.status(500).send("An error occurred while parsing the file content.");
        }

        console.log(curObj);
        curObj.createdPosts.push(newPost);
        const finalString = JSON.stringify(curObj, null, 2); // Beautify the JSON output

        // Write to the file
        fs.writeFile('data/posts.json', finalString, function(writeErr) {
            if (writeErr) {
                console.error("Error writing file:", writeErr);
                return res.status(500).send("An error occurred while writing to the file.");
            }

            // Assuming postCreationAlert is a synchronous function that logs or notifies of the post creation
            postCreationAlert("Created Post");

            // Redirect should only happen after successful write operation
            res.redirect('/FilterPage.html'); // Ensure this is the correct path you intend users to go to after posting
        });
    });
});

app.listen(5556);