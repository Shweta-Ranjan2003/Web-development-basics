//Code as per the video not working
   const http = require('http');
 const fs = require('fs');
 const fileContent = fs.readFileSync('PseudoSelectors2.html')
 const server = http.createServer((req, res)=>{
     res.writeHead(200, {'Content-type' : 'text/html'}); 
     res.end(fileContent)
     server.listen(80, '127.0.0.1', () => {
         console.log("Listening on port 80");
       });
 // The reason for listening to the server at port 80 was, we do not have to explicitly write anything else 
 //in the URL. For example, if we have taken 8000, then we have to explicitly write it on the 
 //URL to get the request back.