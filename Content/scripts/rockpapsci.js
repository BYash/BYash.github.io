var myButton = document.querySelector('button');
function replay() {
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer choice: " + computerChoice);
var compare=function(choice1,choice2){
    if(choice1===choice2){
        console.log("The result is a tie!");
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            alert("You win!!!");
        }
        else{
            console.log("Computer wins!!!");
        }
    }    else if(choice1==="paper"){
        if(choice2==="rock"){
            alert("You win!!!");
        }
        else{
            console.log("Computer wins!!!");
        }
    }    else if(choice1==="scissors"){
        if(choice2==="rock"){
            console.log("Computer wins!!!");
        }
        else{
            alert("You win!!!");
        }
    }
}
compare(userChoice,computerChoice);
}
myButton.onclick = function() {
  replay();
}