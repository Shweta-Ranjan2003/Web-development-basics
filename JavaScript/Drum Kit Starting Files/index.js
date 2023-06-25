//1 way of using addEventListener 

// document.querySelector("button").addEventListener("click",handleClick);

// // Not this -> document.querySelector("button").addEventListener("click",handleClick());  because this will automatically call handleclick function without click
// // handleClick() this is a direct function call and it will not wait for user to actually click on the button.

// function handleClick(){
//     alert("I got clicked");
// }

//2nd way Anonymous Function , it does not have a name 
// document.querySelector("button").addEventListener("click",function handleClick(){
//     alert("I got clicked");
// });


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //Here it will add event listener to all button but the function will be called only after the event click happens

    // this.style.color="white";
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    // console.log(event); //here which ever key you press on keyboard will be logged , or if it was a click then mouseclick
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key){
    switch(key){
        case 'w': var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;
        case 'a': var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
        case 's': var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;
        case 'd': var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;
        case 'j': var audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        break;
        case 'k': var audio6 = new Audio("sounds/crash.mp3");
        audio6.play();
        break;
        case 'l': var audio7 = new Audio("sounds/kick-bass.mp3");
        audio7.play();
        break;
    }   
}

function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);
   //It will select class of the current key eg .w .a etc.
   activeButton.classList.add("pressed");
   //This will add class pressed to the activeButton
   
   //Removing that class after few seconds
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}


 