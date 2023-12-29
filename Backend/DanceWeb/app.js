const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
//contactDance will be the name of database so access it using use contactDance command in mongo poweshell
const app = express();
const bodyparser = require('body-parser');
const port = 80;

//Define mongoose Schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
  });
var Contact = mongoose.model('Contact', contactSchema);
//Contacts will be the name of collections so access it using db.contacts.find() command in mongo poweshell


//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')) //for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug') //set the template engine as pug
app.set('views',path.join(__dirname,'views'))//Set the views directory

//ENDPOINT
app.get('/',(req,res)=>{
    // const con = "This is the best dance academy website"
    const params ={}
    res.status(200).render('Home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params ={}
    res.status(200).render('Contact.pug',params);
})

app.post("/Contact", (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send('This item has been saved to the database')
    }).catch(()=>{
    res.status(400).send('item was not saved to the databse')
});
})


//SERVING THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);});
