/* Declare variables below to save the different sections (divs) of your story*/     
let optionOneScreen = document.querySelector(".option-one-screen");
let optionOneButton = document.querySelector(".option-one");
let openingScreen = document.querySelector(".story-opening");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionTwoButton = document.querySelector(".option-two");
let optionOneEnd = document.querySelector(".option-one-end");
let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");
let helpHer = document.querySelector(".help-her");
let saveYourself = document.querySelector(".save-yourself");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionOneConclusion = document.querySelector(".option-one-conclusion");
let optionTwoConclusion = document.querySelector(".option-two-conclusion");
let optionOneFinal = document.querySelector(".option-one-final");
let optionTwoFinal = document.querySelector(".option-two-final");
let goBack = document.querySelector(".go-back");
let keepGoing = document.querySelector(".keep-going");
let gameOver = document.querySelector(".game-over");
let restart = document.querySelector(".restart");
let itsOver = document.querySelector(".its-over");
let gamesOver = document.querySelector(".games-over");
let boring = document.querySelector(".boring");

 optionOneButton.onclick=function(){
  optionOneScreen.style.display="block";
   openingScreen.style.display="none";

};

optionTwoButton.onclick=function(){
optionTwoScreen.style.display="block";
openingScreen.style.display="none";  
};

boring.onclick=function(){
openingScreen.style.display= "block";
optionTwoScreen.style.display = "none";  
}


leftButton.onclick=function(){
optionOneScreen.style.display = "none";
 optionOneEnd.style.display = "block";
};

rightButton.onclick=function(){
optionOneScreen.style.display = "none";
 optionTwoEnd.style.display = "block"; 
};


helpHer.onclick=function(){
optionTwoConclusion.style.display = "block";
optionOneEnd.style.display = "none";
  
};

saveYourself.onclick=function(){
  optionOneEnd.style.display = "none"; 
  optionOneConclusion.style.display= "block";
};

goBack.onclick=function(){
optionOneConclusion.style.display = "none";
optionOneFinal.style.display = "block";  
};

keepGoing.onclick=function(){
optionTwoFinal.style.display = "block";
optionOneConclusion.style.display = "none";  
};

gameOver.onclick=function(){
openingScreen.style.display = "block";
optionTwoEnd.style.display = "none";  
};

restart.onclick=function(){
openingScreen.style.display = "block";
optionTwoFinal.style.display = "none";  
};

itsOver.onclick=function(){
openingScreen.style.display ="block";
optionTwoConclusion.style.display = "none"; 
};

gamesOver.onclick=function(){
openingScreen.style.display = "block";
optionOneFinal.style.display = "none";  
};


/*INSERT_VARIABLE.onclick=function(){

};
*/

