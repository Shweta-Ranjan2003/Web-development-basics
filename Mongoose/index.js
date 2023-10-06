//getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{useNewUrlParser : true , useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    console.log("We are connected...")
});

var kittySchema = new mongoose.Schema({
    name : String
});

kittySchema.methods.speak = function(){
    var greeting = "My name is " + this.name
    console.log(greeting);
}

var Kitten = mongoose.model('Shweta',kittySchema);

var Shweta = new Kitten({name : 'Shweta Ranjan'});
var Shweta2 = new Kitten({name : 'Pro Shweta'});
console.log(Shweta.name);
Shweta.speak();

Shweta2.save(function (err , Rohan){
    if (err) return console.error(err);
    Rohan.speak();
});

Kitten.find({name:"Shweta Ranjan"}, function(err , kittens){
    if (err) return console.error(err);
    console.log(kittens);
})
Kitten.find({name:"Pro Shweta"}, function(err , kittens){
    if (err) return console.error(err);
    console.log(kittens);
})
// The save() function takes two parameters- error and object. The question arises where this data is saved. 
//It automatically gets saved in the new file with the name plural of the object name that is created. 