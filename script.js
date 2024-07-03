const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const responseContainer = document.getElementById('response-container');
const maxMessages = 5;
const messages = [];

sendBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();

  if (userInputValue === '') {
    messages.push('That is blank😅');
  } else if (customResponse(userInputValue)) {
    // If customResponse returns a truthy value, use that as the response
    messages.push(customResponse(userInputValue));
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
