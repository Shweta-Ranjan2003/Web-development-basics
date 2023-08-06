//https://nodejs.org/dist/latest-v6.x/docs/api/all.html

const fs=require("fs");

//fs.writeFile(file, data[, options], callback)
// fs.writeFile("message.txt","Hello from NodeJS!",(err)=>{
//     if(err) throw err;
//     console.log("The file has been saved");
// });

 //fs.readFile(file[, options], callback)
fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});
//If no encoding is specified , then the raw buffer is returned.