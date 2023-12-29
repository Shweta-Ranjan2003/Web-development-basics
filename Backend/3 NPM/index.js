//npmjs.com
//npm init
//npm install {package name} //we can find useful package at npmjs.com

// eg npm i sillyname superheroes

// var generateName = require("sillyname");
import generateName from "sillyname";
var sillyname = generateName();
console.log(`My name is ${sillyname}.`);


import superheroes from "superheroes";
var name = superheroes.random();
console.log(`My name is ${name}!`);

//EcmaScript modules , common js
//at the time of nodejs we used common js which was using require keyword
//but now we can use ecmascript modules which will use import - standardise way to use js
//for using it go to package.json add "type": "module". 