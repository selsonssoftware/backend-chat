import {server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server=http.createServer(app);

const io = new server.Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST","PUT","DELETE"],
        Credentials:true
    }
});

export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}

//used to store online users
const userSocketMap={}; //{userId:socketId }

is.on("connection",(socket)=>{
    console.log("New client connected:",socket.id);

    const userId=socket.handshake.query.userId;
    if(userId){ 
        userSocketMap[userId]=socket.id;
    }

// io.emit is used to send events to all the connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on("disconnect",()=>{
        console.log("Client disconnected:",socket.id);
        delete userSocketMap[userId];   
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})

export default io;

server.listen(4000,()=>{
    console.log("Socket server is running on port 4000");
})
