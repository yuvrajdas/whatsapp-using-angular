const express = require('express');
const app = express();
const port  = process.env.port || 3000;
const socket = require('socket.io');
const server = app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

const io = socket(server, {cors:{origin:'*'}})

io.on('connection',(socket)=>{
    console.log(socket.id, 'Connected');

    socket.on('chat',(chatData)=>{
        io.emit('chat', chatData);
    })
    
    socket.on('typing', (user)=>{
        io.emit('typing', user);
    })
})