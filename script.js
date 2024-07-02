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
        responseDiv.innerText = 'that is blank 😊';
    } else {
        loadingAnimation.classList.remove('hidden');
        setTimeout(() => {
            responseDiv.innerText = message; // echo the user's input
            loadingAnimation.classList.add('hidden');
        }, 1000); // simulate a 1.0 second delay
    }
    messageInput.value = '';
}
        );
