// Get the input field and send button elements
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const responseContainer = document.getElementById('response-container');

// Add event listener to the send button
sendBtn.addEventListener('click', () => {
    // Get the user input value
    const userInputValue = userInput.value.trim();

    // Generate a response
    const response = `Response: ${userInputValue}`;

    // Create a new response area element
    const responseArea = document.createElement('div');
    responseArea.className = 'response-area';

    // Create a new response text element
    const responseText = document.createElement('p');
    responseText.className = 'response-text';
    responseText.textContent = response;

    // Add the response text to the response area
    responseArea.appendChild(responseText);

    // Add the response area to the response container
    responseContainer.appendChild(responseArea);

    // Clear the input field
    userInput.value = 
        '';
});
