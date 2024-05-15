const httpServer = require("http").createServer();

const io = require("socket.io")(httpServer, {});
const onlineUsers = [];
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("connection", "connected");
  onlineUsers.push(socket.id);
  socket.on("disconnect", () => {
    onlineUsers.splice(onlineUsers.indexOf(socket.id), 1);
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg.messgae + " from " + msg.name, socket.id);
    socket.broadcast.emit("chat message", msg);
  });
  socket.on("tell users", () => {
    console.log(onlineUsers);
  });
});

httpServer.listen(5000);
