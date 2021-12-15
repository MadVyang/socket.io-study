const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

app.use(require('cors'));

app.get('/', (req, res) => {
});

server.listen(3333, () => {
	console.log('listening on :3333');
});

io.on('connection', (socket) => {
	console.log('hi!', socket.id);
	socket.emit('msg', 'Welcome from server!');

	socket.on('disconnect', () => {
		console.log(socket.id, 'disconnected');
	});

	socket.on('msg', (msg) => {
		console.log(socket.id, ':', msg);
		io.emit('msg', `${socket.id}: ${msg}`);
	});
});