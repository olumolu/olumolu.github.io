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

            /* Color Palettes
            Contrasting Colors: Q: #3498db (bright blue) -> R: #f1c40f (warm orange)
            Nature-Inspired: Q: #2ecc71 (fresh green) -> R: #9b59b6 (rich purple)
            Monochromatic: Q: #4CAF50 (deep green) -> R: #8BC34A (lighter green)
            Bold and Bright: Q: #FF69B4 (vibrant pink) -> R: #33CC33 (bright green)
            Neutral and Calming: Q: #666666 (dark gray) -> R: #999999 (light gray)
            Tech-Inspired: Q: #2196F3 (deep blue) -> R: #FFC107 (bright yellow-orange)
            Vibrant Duo: Q: #8F0A1A (deep red) -> R: #34C759 (bright lime green)
            Sunset Hues: Q: #FFA07A (warm orange) -> R: #FFC67D (soft yellow)
            Electric Dreams: Q: #9B59B6 (rich purple) -> R: #66D9EF (bright teal)
            Fruit Salad: Q: #FFC67D (soft yellow) -> R: #8BC34A (bright green)
            Glowing Embers: Q: #FF9900 (vibrant orange) -> R: #FF69B4 (bright pink)
            Ocean Breeze: Q: #3498db (bright blue) -> R: #2ecc71 (fresh green)
            Retro Futurism: Q: #FFC107 (bright yellow-orange) -> R: #2196F3 (deep blue) */

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

const responses = {
  'hi': 'Hello!',
  'hello': 'Hi there!',
  'tell me the name of prime minister of india': ' Narendra Damodar das modi'q
  'what is earth': 'The planet we live on, with air, water, and life, supporting a diverse range of ecosystems and species, with mountains, oceans, and forests.',
  'what is universe': 'Everything that exists, including stars, galaxies, space, and time, governed by physical laws and still expanding, with mysteries waiting to be uncovered.',
  'what is linux': 'A free and open-source computer operating system, highly customizable and widely used in devices from supercomputers to smartphones, with a large community of developers.',
  'linux': 'A free and open-source computer operating system, highly customizable and widely used in devices from supercomputers to smartphones, with a large community of developers.',
  'what is human': 'A living being with a brain, heart, and ability to think, learn, and communicate, with a complex social structure and emotions, capable of love, kindness, and creativity.',
  'what is woman': 'An adult female human being, with unique characteristics, roles, and contributions to society, family, and culture, with strength, resilience, and beauty.',
  'what is girl': 'An adult female human being, with unique characteristics, roles, and contributions to society, family, and culture, with strength, resilience, and beauty.',
  'what is moon': 'The natural satellite that orbits around the Earth, influencing tides, stabilizing Earth\'s axis, and inspiring human imagination and exploration, with its own unique beauty and charm.',
  'what is love': 'A strong feeling of affection, attachment, or devotion to another person, place, or thing, often characterized by feelings of warmth, tenderness, and deep caring.',
  'what is computer': 'An electronic device that can store, process, and communicate information, performing tasks such as calculations, data storage, and communication, with various types including desktops, laptops, and mobile devices.',
  'what is internet': 'A global system of interconnected computer networks that use the Internet Protocol to link devices worldwide, enabling communication, information sharing, and online services.',
  'what is artificial intelligence': 'The development of computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making, with applications in areas like robotics, healthcare, and finance.',
  'ai': 'The development of computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making, with applications in areas like robotics, healthcare, and finance.',
  'what is ai': 'The development of computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making, with applications in areas like robotics, healthcare, and finance.',
  'what is machine learning': 'A subset of artificial intelligence that involves training algorithms to learn from data and make predictions or decisions, without being explicitly programmed, with applications in areas like image recognition, natural language processing, and predictive analytics.',
  'ml': 'A subset of artificial intelligence that involves training algorithms to learn from data and make predictions or decisions, without being explicitly programmed, with applications in areas like image recognition, natural language processing, and predictive analytics.',
  'what is ml': 'A subset of artificial intelligence that involves training algorithms to learn from data and make predictions or decisions, without being explicitly programmed, with applications in areas like image recognition, natural language processing, and predictive analytics.',
  'what is chatbot': 'A computer program that simulates human-like conversation, using natural language processing and machine learning to understand and respond to user inputs, often used in customer service, tech support, and entertainment.',
  'can you have fun': 'I don\'t but I can give response if I know about it',
  'how are you': 'I\'m doing well, thanks!',
  'how are you doing': 'I\'m doing well, thanks!',
  'i love you': 'I love you too!',
  'what you know about': 'I know many things but not that much',
  'what is dodo': 'It is a round object which is used for hand exercise by pressing that object',
  'dodo': 'It is a round object which is used for hand exercise by pressing that object',
  'what is dudu': 'It is a round object which is used for hand exercise by pressing that object',
  'dudu': 'It is a round object which is used for hand exercise by pressing that object',
  'what is your name': 'I don\'t have a name, it is a basic preprogrammed chatbot',
  'goodbye': 'See you later!',
  'thanks': 'You\'re welcome!',
  'hey': 'Yes please',
  'what is your favorite color': 'I don\'t have personal preferences, but I can tell you about popular colors!',
  'where are you from': 'I exist on the internet, so I don\'t have a physical location.',
  'what can you do': 'I can answer questions, tell jokes, and provide information on various topics. Feel free to ask me anything!',
  'how old are you': 'I don\'t have an age, as I am a computer program created to assist you.',
  'what is the time': 'I don\'t have access to real-time information, so I cannot tell you the current time.',
  'what is the date': 'I don\'t have access to real-time information, so I cannot tell you the current date.',
  'what is the weather like': 'I don\'t have access to real-time data, so I cannot provide weather updates.',
  'what is the meaning of life': 'The meaning of life is a philosophical question with many interpretations, often relating to personal fulfillment and happiness.',
};

const storyPoemRequests = [
  'tell me a story',
  'tell story',
  'tell a story',
  'write me a poem',
  'write poem',
  'write a poem',
  'tell me a poem',
  'tell poem',
  'tell a poem',
  'write me a story',
  'write story',
  'write a story'
];

const jokeRequests = [
  'tell me a joke',
  'tell joke',
  'tell a joke',
  'can you tell me a joke',
  'could you tell a joke',
  'could you tell me a joke',
  'could you tell joke',
  'could you tell me joke',
  'can you tell a joke'
];

const jokes = [
  "Why did the physicist break up with his girlfriend? He found her mass attractive, but her gravity was overwhelming.",
  "Why did the cell go to therapy? It was feeling a little divided.",
  "Why did the math book look so sad? Because it had too many problems.",
  "Why did the astronaut break up with his girlfriend before going to Mars? Because he needed space.",
  "Why do computers go to the doctor? They have a virus!",
  "Why did the atom lose its job? Because it couldn't bond with its coworkers.",
  "Why did the engineer cross the road? To get to the other side... of the equation.",
  "Why did the statistician quit his job? Because he didn't get a significant result.",
  "Why did the robot go on a diet? It wanted to lose some bytes.",
  "Why was the pizza in a bad mood? It was feeling crusty.",
  "Why did the tourist bring a ladder to Paris? He wanted to elevate his experience.",
  "Why did the guitar go to the doctor? It had a fretful problem.",
  "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "What do you call a fake noodle? An impasta.",
  "Why did the coffee file a police report? It got mugged!",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What do you call a group of cows playing instruments? A moo-sical band.",
  "Why did the banana go to the doctor? He wasn't peeling well.",
  "Why did the chicken cross the playground? To get to the other slide.",
  "What do you call a bear with no socks on? Barefoot.",
  "Why did the mushroom go to the party? Because he was a fun-gi.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call a pair of two friends having the similar size cup? We call them bras!",
  "Why did the cookie go to the doctor? It felt crumby!",
  "How does a penguin build its house? Igloos it together!",
  "Why did the chef get rid of his onions? He wanted to kill his kitchen's bad mood.",
  "Why did the boy start doing bench presses? He had a break-up, now bench was the only thing left to press!",
];

function customResponse(input) {
  input = input.replace(/[^a-zA-Z0-9\s]/g, '').trim().toLowerCase();
  
  if (storyPoemRequests.includes(input)) {
    return 'Sorry! I cannot do this at the point of time!';
  }
  
  if (jokeRequests.includes(input)) {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return randomJoke;
  }
  
  if (input.startsWith('hi my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  }
  
  return responses[input] || `Sorry, I don't know the answer to that 😔`;
}
