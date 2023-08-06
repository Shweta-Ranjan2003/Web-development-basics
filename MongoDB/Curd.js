// MongoDb stores data as documents, so it is known as a document oriented database.
// Data is stored in the form of BSON. BSON is almost similar to JSON with the only difference that types of variables are declared in it.
// If you are coming from the DBMS background, then following changes are there-
// Database is referred to as a database.
// Table is referred to as a collection.
// Row is referred to as documents
// Mongod is the host process for the database.
// Mongo is the command line shell that connects to a specific instance of mongod. 
// When you run mongo with no parameters it defaults to connecting to the local host on port 27017.
// If you run mongo against an invalid host_machine: port combination then it will fail to connect.

//Mongo Commands
/*
show collections

//Insterting data in mongo db
Use harrykart
db.items.insertOne({name:"13", price:"45000"}) 
db.items.insertMany([{name:"13", price:"20000"}, {name:"14",price:"59000"} ,{name:"13 pro max", price:"35000"}]) 
db.items.find() 

//Searching for data in mongo db
use harryKart
db.items.find({price:45000}) 
db.items.find({price:{$gte:35000}}) 
gte = greater than equal to
gt = greater than
lt = less than
lte = less than equal to
//And operator
db.items.find({price:{$gte:35000} , name :{$gt:14}})
// Or operator
db.items.find({ $or: [{price:{$gte:35000} },{ name :{$gt:14}}]}) 
//filter
db.items.find({price:{$gt:35000}} , {price:1 , qty:1}) 
It will apply filter and only shoe price and qty data

// Deleting data
db.items.deleteOne({price:22000}) 
Delete one will delete the first matching document entry in case of multi document match
db.items.deleteMany({price:22000})

//Updating data
db.anotherCollection.insertOne({a:89}) 
It will add another table named anotherCollection to your db
db.items.updateOne({name:"Moto 30s"} , {$set:{price:2}}) 
db.items.updateMany({name:"Moto 30s"} , {$set:{price:3 , rating:1}})
*/