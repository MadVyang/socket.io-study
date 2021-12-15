let ipBox, conBtn, logBox, inputBox;

window.onload = () => {
	ipBox = document.querySelector('#ip-box');
	conBtn = document.querySelector('#con-btn');
	logBox = document.querySelector('#log-box');
	inputBox = document.querySelector('#input-box');

	conBtn.addEventListener('click', (e) => {
		connect(ipBox.value);
	});
};

window.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		sendMsg(getMsg());
		inputBox.value = '';
	}
});


function getMsg() {
	return inputBox.value;
}

function printMsg(msg) {
	logBox.innerText += msg + '\n';
}