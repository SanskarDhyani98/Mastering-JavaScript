import express from "express";
import { WebSocketServer } from "ws";
const app = express();
const port = 8080;
const server = app.listen(port, () => {
  console.log("server is listening..");
}); // returns server instance
//const wss= new WebSocketServer({port:3000});//passing different port to pass on diff port from http for ws
const wss = new WebSocketServer({ server }); //for passing on same port
wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("data from client-: %s ", data);
    //response
    ws.send("thanks buddy!");
  });
  //ws- specific client k liye socket connection
}); //connection is an event -- websocket conn establsh=>callback runs
