const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const responseContainer = document.getElementById('response-container');
const maxMessages = 5;
const messages = [];

const responses = {
  "hi": "Hello!",
  "hello": "Hi there!",
  "how are you": "I'm doing well, thanks!",
  "what is your name": "I don't have a personal name, but you can call me Assistant!",
  "goodbye": "See you later!",
  "thanks": "You're welcome!",
  "introduction": (input) => {
    const name = input.replace("hi my name is", "").trim();
    return `Hi ${name}!`;
  }
};

sendBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();

  if (userInputValue === '') {
    messages.push('That is blank😅');
  } else {
    const response = customResponse(userInputValue);
    if (response) {
      messages.push(response);
    } else {
      messages.push(`I didn't understand that. Try saying hello or goodbye!`);
    }
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
  input = input.toLowerCase();

  for (const key in responses) {
    if (input.includes(key)) {
      if (typeof responses[key] === 'function') {
        return responses[key](input);
      } else {
        return responses[key];
      }
    }
  }

  return null;
}
