document.addEventListener('DOMContentLoaded', changeAllowedPlayers);

//globaly define so we can access value within function, i tried to pass a parameter of status spinner, however this would automaticly do console.log. reason unknown for now
let statusSpinner = document.getElementById("playerNumber")
let playerOne = document.getElementById('playerType1');
let playerTwo = document.getElementById('playerType2');
let playerThree = document.getElementById('playerType3');
let playerFour = document.getElementById('playerType4');

createEvenListeners();

function createEvenListeners(){

    statusSpinner.addEventListener('change', changeAllowedPlayers)

    var formRequirements = document.getElementById('formPostRequirements')
    formRequirements.addEventListener('submit' , validateForm)
}

function validateForm(evt) {
    //only fields that are required are the title, and the player# class
    //this.title.value refers to the formRequirements and the title input it contains
    console.log('validate data')
    var validForm = false;

    let titleStatus = titleValidate(this.title)
    let levelStatus = levelValidate(this.levelRequirement)

    console.log(this.levelRequirement.value)

    validForm = titleStatus && levelStatus
    
    if (!validForm)
        evt.preventDefault()

}

function titleValidate(title) {

    if (title.value.length > 0){
        //console.log(title.value.length)
        title.placeholder = ""
        return true
    }else{
        alert("You Must Enter a Title")
        title.placeholder = "Enter Value Here"
        return false
    } 
}

function levelValidate(level) {
    if (level.value == ""){
        alert("Level Required Must not be empty")
        return false
    }else if(level.value <= 0) {
        alert("Level Required Must be greater than 0")
        return false
    }else if (level.value > 0){
        return true
    }
}



function changeAllowedPlayers(){

    playerOne.disabled = false
    playerTwo.disabled = false
    playerThree.disabled = false
    playerFour.disabled = false
    //resets values back to NA if allowed players "resets"
    playerOne.value = "NA"
    playerTwo.value = "NA"
    playerThree.value = "NA"
    playerFour.value = "NA"

    if(statusSpinner.value == 1){
        playerTwo.disabled = true
        playerThree.disabled = true
        playerFour.disabled = true
    }
    else if(statusSpinner.value == 2){
        playerThree.disabled = true
        playerFour.disabled = true
    }
    else if(statusSpinner.value == 3){
        playerFour.disabled = true
    }
}