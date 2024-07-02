const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const responseContainer = document.getElementById('response-container');
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const maxMessages = 5;
const messages = [];
let isDarkMode = false;

sendBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();

  if (userInputValue === '') {
    messages.push('That is blank😅');
  } else if (customResponse(userInputValue)) {
    // If customResponse returns a truthy value, use that as the response
    messages.push(customResponse(userInputValue));
  } else {
    messages.push(userInputValue);
  }

  userInput.value = '';

  responseContainer.innerHTML = '';

  for (let i = 0; i < maxMessages; i++) {
    const message = messages[messages.length - 1 - i];
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    responseContainer.appendChild(messageElement);
  }

  messages = messages.slice(-maxMessages);
});

function customResponse(input) {
  if (input.toLowerCase() === 'hi') {
    return 'Hello!';
  }
  return null;
}

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    body.classList.add('dark-mode');
    isDarkMode = true;
    localStorage.setItem('darkMode', isDarkMode);
  } else {
    body.classList.remove('dark-mode');
    isDarkMode = false;
    localStorage.setItem('darkMode', isDarkMode);
  }
});

// Check local storage for dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  isDarkMode = true;
} else {
  body.classList.remove('dark-mode');
  isDarkMode = false;
}
