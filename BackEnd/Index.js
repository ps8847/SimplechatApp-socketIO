const express = require("express");
const app = express()
const http = require("http");
const cors = require("cors");

const path = require('path')
app.use(cors())

app.use(express.static(path.join(__dirname + "/public")))

const PORT = process.env.PORT || 8000;


const {Server} = require("socket.io");



const server = http.createServer(app);



const io = new Server(server , {
	cors: {
		origin:"https://simplechat-app-socket-io.vercel.app",
		methods: ["GET" , "POST"]
	}
})

io.on("connection" , (socket) => {
	console.log("user connected " , socket.id)

	socket.on("join_room" , (data) => {
		socket.join(data);
		console.log(`user with id : ${socket.id}  joined room ${data}`);
	})

	socket.on("send_message" , (data) => {
		socket.to(data.room).emit("receive_messsage" , data)
	})
	socket.on("disconnect" , () => {
		console.log("user disconnected " , socket.id);
	})

})


server.listen(PORT , () => console.log("backend started at port 8000"))