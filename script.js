const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const responseContainer = document.getElementById('response-container');
const maxMessages = 5;
const messages = [];

sendBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();

  if (userInputValue === '') {
    messages.push('That is blank😅');
  } else {
    customResponse(userInputValue).then(response => {
      messages.push(response);
    }).catch(error => {
      console.error('Error:', error);
    });
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
  // Remove special characters from input
  input = input.replace(/[^a-zA-Z0-9\s]/g, '').trim().toLowerCase();
  
  if (input === 'hi') {
    return 'Hello!';
  } else if (input === 'hello') {
    return 'Hi there!';
  } else if (input === 'how are you') {
    return 'I\'m doing well, thanks!';
  } else if (input === 'what is your name') {
    return 'I don\'t have a personal name, but you can call me Assistant!';
  } else if (input === 'goodbye') {
    return 'See you later!';
  } else if (input === 'thanks') {
    return 'You\'re welcome!';
  } else if (input === 'hey') {
    return 'Yes please';
  } else if (input.startsWith('hi my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else if (input.startsWith('hello my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else if (input === 'tell me a joke' || input === 'tell joke' || input === 'tell a joke') {
    return fetch('jokes.json')
      .then(response => response.json())
      .then(data => {
        const jokes = data.jokes;
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        return randomJoke;
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
        return 'Sorry, couldn\'t fetch jokes!';
      });
  } else {
    return "I didn't understand that."; // default response
  }
}
