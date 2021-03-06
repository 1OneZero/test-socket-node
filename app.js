const express = require("express");
const app  = express();
const PORT = process.env.PORT || 2000;
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);


app.use(express.json());


io.on('connection',(socket)=>{
    console.log("user connected to scoket id: ",socket.id)
    // console.log("user connected to scoket id: ",socket.handshake.query);
    
    socket.on('patient',(socket)=>{console.log("user connected to scoket id: ",socket) });
    socket.join("some room");
    io.in("some room").emit( "some event",{connected:"roomed"});
    io.emit(socket.token,{connected:"hey there emotted on room"});

    io.emit('connected-user',{connected:"hey there buddy"});
});

app.get("/test",(req,res)=>{

console.log("this is test");

io.in("some room").emit("remove",{connected:"removed"});
return res.json({message:"emitted"});
});

app.set("socket",io);





server.listen(PORT,"0.0.0.0",()=>{
    console.log("server started");
})