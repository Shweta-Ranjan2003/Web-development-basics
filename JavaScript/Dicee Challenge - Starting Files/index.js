// var randomNumber1 = Math.random()*6;
// randomNumber1= Math.floor(randomNumber1)+1;

// switch(randomNumber1){
//  case 1: document.querySelector(".img1").setAttribute("src", "./images/dice1.png" );
//  break;
//  case 2: document.querySelector(".img1").setAttribute("src", "./images/dice2.png" );
//  break;
//  case 3: document.querySelector(".img1").setAttribute("src", "./images/dice3.png" );
//  break;
//  case 4: document.querySelector(".img1").setAttribute("src", "./images/dice4.png" );
//  break;
//  case 5: document.querySelector(".img1").setAttribute("src", "./images/dice5.png" );
//  break;
//  case 6: document.querySelector(".img1").setAttribute("src", "./images/dice6.png" );
//  break;
//  default : console.log("Error!");
// }
// var randomNumber2 = Math.random()*6;
// randomNumber2= Math.floor(randomNumber2)+1;

// switch(randomNumber2){
//  case 1: document.querySelector(".img2").setAttribute("src", "./images/dice1.png" );
//  break;
//  case 2: document.querySelector(".img2").setAttribute("src", "./images/dice2.png" );
//  break;
//  case 3: document.querySelector(".img2").setAttribute("src", "./images/dice3.png" );
//  break;
//  case 4: document.querySelector(".img2").setAttribute("src", "./images/dice4.png" );
//  break;
//  case 5: document.querySelector(".img2").setAttribute("src", "./images/dice5.png" );
//  break;
//  case 6: document.querySelector(".img2").setAttribute("src", "./images/dice6.png" );
//  break;
//  default : console.log("Error!");
// }

 var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

 var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
 
 var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
 
 var image1 = document.querySelectorAll("img")[0];
 
 image1.setAttribute("src", randomImageSource);
 
 
 var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
 var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
 
 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}