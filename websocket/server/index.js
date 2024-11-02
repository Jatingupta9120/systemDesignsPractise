import express from 'express';
import { Server } from 'socket.io';
import {createServer} from 'http';
import cors from 'cors';
import jwt from "jsonwebtoken";
const secretKeyJWT="jatinGupta";
const port=5000;
const app=express();
const server=createServer(app);


const io=new Server(server,{
    cors:{
        origin:"*",
        methods:["GET", "POST"],
        credentials:true
    }
});//here we are creating a circuit instance where all the other sockets are inside io means circuit

app.use(cors({
    origin:"*",
    methods:["GET", "POST"],
    credentials:true
}));//middleware 

app.get('/',(req,res)=>{
    res.send('hello jatin');
})//get request 
//here we can use midleware in that so that we can get authentication that user is authenticated or not the request is valid or not or authorized or not instead of app.use() we will use io.use() 


const user=false;
io.use((socket,next)=>{
    if(user)next();
})


app.get("/login",(req,res)=>{
    const token=jwt.sign({_id:"NBRFugawMj9s1uAaAAAT"},secretKeyJWT);
    res.cookie("token",token,{httpOnly:true,secure:true,sameSite:"none"}).json({
        message:"Login Success",
    })
})

io.on("connection",(socket)=>{

    console.log("User connected");

    console.log("id",socket.id);

    socket.on("message",({room,message})=>{
        console.log({room,message});
        io.to(room).emit("receive-messsage",message);
        // io.emit("receive-messsage",data);
    })

    socket.on("join-room",(room)=>{
        socket.join(room);
        console.log(`User has joined room ${room}`);
    })
    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id)
    })

    socket.emit("Welcome","Welcome to the server");

    socket.broadcast.emit("Welcome",`I am a running socket ${socket.id} `);
})//here we will set  the connection 


//app.listen krenge to naaya instance create ho jayega isilia server.listen krte hain jo instance create hai usipe listen kradenge
server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})