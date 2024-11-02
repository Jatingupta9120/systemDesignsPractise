import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
const App = () => {
  const socket = useMemo(()=>io("http://localhost:5000"),[]);

  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketId, setSocketId] = useState("");
  const [messages,setMessages]=useState([]);
  const [roomName,setRoomName]=useState("");

  console.log(messages)
  const submitHandler = (e) => {
    e.preventDefault(); //isse page refresh ni hoga by default
    socket.emit("message",{message,room})
    setMessage("");
  };

  const joinHandler=()=>{
    socket.emit("join-room",roomName);
    setRoomName("");
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
      setSocketId(socket.id);
    });

    socket.on("Welcome", (s) => {
      console.log(s);
    });

    socket.on("receive-messsage",(s)=>{
      console.log("receive-messsage",s);
      setMessages((message)=>[...message,s]);
    })
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container maxwidth="sm">
      <Box sx={{height:200}}/>
      <Typography variant="h6" component="div" gutterBottom>
       {socketId}
      </Typography>

    <form action="" onSubmit={joinHandler}>

      <h5>Join Room Now</h5>
      <TextField
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          id="outlined-basic"
          label="Room Name"
          variant="outlined"
        />
          <Button type="submit" variant="contained" color="primary">
            Join Now
      </Button>
    </form>
      <form action="" onSubmit={submitHandler}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="outlined-basic"
          label="Message"
          variant="outlined"
        />
        <TextField
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          id="outlined-basic"
          label="Room"
          variant="outlined"
        />
        
      <Button type="submit" variant="contained" color="primary">
            Send
      </Button>
      </form>
      <Stack>
        {
          messages.map((m,i)=>(
            <Typography key={i} variant="h6" component="div" gutterBottom>
            {m}
           </Typography>
          ))}
      </Stack>
    </Container>
  );
};

export default App;
