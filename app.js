const express = require("express");
const app  = express();
const PORT = process.env.PORT || 2000;
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);

app.use(express.json());


io.on('connection',(socket)=>{
    console.log("user connected to scoket id: ",socket.id)
});

io.on('patient',(socket)=>{
    console.log("user connected to scoket id: ",socket)
});


server.listen(PORT,"0.0.0.0",()=>{
    console.log("server started");
})