//globaly define so we can access value within function, i tried to pass a parameter of status spinner, however this would automaticly do console.log. reason unknown for now
let statusSpinner = document.getElementById("playerNumber")


createEvenListeners();

function createEvenListeners(){

    statusSpinner.addEventListener('change', changeAllowedPlayers)

}


function changeAllowedPlayers(){

    let playerOne = document.getElementById('playerType1');
    let playerTwo = document.getElementById('playerType2');
    let playerThree = document.getElementById('playerType3');
    let playerFour = document.getElementById('playerType4');

    if (statusSpinner.value == 2){
        console.log("test")
    }
    


}