const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const responseContainer = document.getElementById('response-container');
const maxMessages = 5;
let messages = [];

sendBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();

  if (userInputValue === '') {
    messages.push(`<span style="color: #2ecc71">That is blank😅</span>`);
  } else if (isMathExpression(userInputValue)) {
    try {
      const result = evaluateExpression(userInputValue);
      messages.push(`<span style="color: #9b59b6"> >>> ${result} </span>`);
    } catch (error) {
      messages.push(`<span style="color: #e74c3c">Error: Invalid expression</span>`);
    }
    messages.push(`<span style="color: #2ecc71">You: ${userInputValue}</span>`);
  } else if (customResponse(userInputValue)) {
    messages.push(`<span style="color: #9b59b6"> >>>${customResponse(userInputValue)} </span>`); // Response in rich purple
    messages.push(`<span style="color: #2ecc71">You: ${userInputValue}</span>`); // Question in fresh green
  }

  userInput.value = '';

  responseContainer.innerHTML = '';

  for (let i = 0; i < messages.length; i++) {
    const message = messages[messages.length - 1 - i];
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    responseContainer.appendChild(messageElement);
  }

  messages = messages.slice(-maxMessages * 2); // Increase the number of lines
});

function isMathExpression(input) {
  const mathPattern = /^[0-9+\-*/().\s]+$/;
  return mathPattern.test(input);
}

function evaluateExpression(expression) {
  return new Function('return ' + expression)();
}

function customResponse(input) {
  // Add your custom response logic here
  return null;
}
