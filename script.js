// script.js
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message');
const responseDiv = document.getElementById('response');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message === '') {
        responseDiv.innerText = '😊';
    } else {
        responseDiv.innerText = 'Hi, thanks for contacting me! I will help build a better world, plant trees!';
    }
    messageInput.value = '';
});
