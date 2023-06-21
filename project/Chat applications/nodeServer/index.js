// const { Socket } = require('socket.io');
// const cors = require('cors')
// index.use(cors())
//Node server which will handle socket io connections
const io = require('socket.io')(8000)
const users = {};
//io.on means its a socket.io instance
io.on('connection',socket=>{
    //If any new user joins, let other users connected to the server know!
   socket.on('new-user-joined',name=>{
       //socket.on means for a particular connection.
       console.log("new user", name)
      users[socket.id] = name;
      socket.broadcast.emit('user-joined',name);
   });
   //If someone sends a message , broadcast it to other people
   socket.on('send',message=>{
       socket.broadcast.emit('receive',{message: message,name:users[socket.id]})
   });
   //If someone leaves the chat , broadcast it to other people
    socket.on('disconnect',message=>{
       socket.broadcast.emit('leave',users[socket.id]);
       delete users[socket.id];
   });
})