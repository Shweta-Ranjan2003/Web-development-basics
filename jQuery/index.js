// $("h1").css("color","red");
//In js it is document.querySelector("h1").style.color = "Red"; but here in jQuery it is shorthanded to $("h1").css("color","red");


//***********Selecting elements using jQuery**********

// document.querySelector("h1");
// Replaced by
// $("h1";)
// document.querySelectorAll("button");
// $("button")
//It will also select all the buttons


//*************Manipulating styles using jQuery**********
//If there are two parameter passed then it will set the second property to the first attribute
// $("h1").css("color","hotpink");
//It will set color to hotpink

//Else it there is just one parameter then it will return the value of that attribute
// console.log($("h1").css("font-size"));
//It will return the value , it can be any property like color also

// $("h1").addClass("bigStyle padding100px");
// $("h1").removeClass("bigStyle");

// console.log($("h1").hasClass("padding100px")); //true
//It return bool value true or false


//***************Manipulating text with jQuery**********
// $("h1").text("Bye Bye");
// $("button").text("Dont click Me"); //By default dollar will select all the element with mentioned tag name , class name
// $("button").html("<em>Hey</em>"); //It is a shorthand for innerHTML


//************Manipulating Attributes with jQuery********
// console.log($("img").attr("src")); //home.jpg ,  here attr stands for attributes
// $("a").attr("href","https://www.linkedin.com");

// console.log($("h1").attr("class")); //it will print all the classed given to h1 tag


//*************Adding Event Listener with jQuery**********
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

// $("button").click(function(){
//   $("h1").css("color","hotpink");
// });

// $("input").keydown(function(event){
//     console.log(event.key);
// });
//instead of input we can give document or body also

//Or
// $("h1").on("mouseover",function(){
//     $("h1").css("color","green");
// })
//mouseover , click or anything


//**********Adding or Removing Elements using jQuery**********
// $("h1").before("<button>New</button>");
//it will add the new element before the opening tag of selected element
// $("h1").after("<button>New</button>");
//it will add the new element after the closing tag of selected element
// $("h1").prepend("<button>New</button>"); 
//Difference between prepend and before is that prepend will the html element into the item selected just after the opening tag
// $("h1").append("<button>New</button>"); 
//Appended after the h1 content but before the closing tag
// $("button").remove();
//It will remove all the button elements



//**************Website Animation with jQuery**************
$("button").on("click",function(){
//   $("h1").hide();
//   $("h1").show();
//   $("h1").toggle();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").fadeToggle();
// $("h1").slideUp();
// $("h1").slideDown();
// $("h1").slideToggle();

// $("h1").animate({opacity:0.5});
// $("h1").animate({margin:"20%"});
$("h1").fadeOut().fadeIn().animate({margin:"20%"});
});