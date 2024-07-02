// script.js
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message');
const responseDiv = document.getElementById('response');
const loadingAnimation = document.getElementById('loading-animation');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message === '') {
        responseDiv.innerText = '😊';
    } else {
        loadingAnimation.classList.remove('hidden');
        setTimeout(() => {
            responseDiv.innerText = 'Hi, thanks for contacting me! I will help build a better world, plant trees!';
            loadingAnimation.classList.add('hidden');
        }, 1500); // simulate a 1.5 second delay
    }
    messageInput.value = '';
});
