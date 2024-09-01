const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const responseContainer = document.getElementById('response-container');
const maxMessages = 5;
let messages = [];
const API_URL = 'https://api-inference.huggingface.co/models/google/flan-t5-xl';

sendBtn.addEventListener('click', async () => {
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
  } else {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'inputs': userInputValue
        })
      });

      const data = await response.json();
      const responseText = data.generated_text;
      messages.push(`<span style="color: #9b59b6"> >>> ${responseText} </span>`);
      messages.push(`<span style="color: #2ecc71">You: ${userInputValue}</span>`);
    } catch (error) {
      messages.push(`<span style="color: #e74c3c">Error: ${error.message}</span>`);
    }
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
