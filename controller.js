let socket;

function connect(ip) {
	socket = io.connect(
		`http://${ip}:3333`, {
		cors: { origin: '*' }
	});

	socket.on('msg', (msg) => {
		printMsg(msg);
	});
}

function sendMsg(msg) {
	socket.emit('msg', msg);
}