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
  // Remove special characters from input
  input = input.replace(/[^a-zA-Z0-9\s]/g, '').trim().toLowerCase();
  
  if (input === 'hi') {
    return 'Hello!';
  } else if (input === 'hello') {
    return 'Hi there!';
  } else if (input === 'what is earth') {
    return 'The planet we live on, with air, water, and life, supporting a diverse range of ecosystems and species, with mountains, oceans, and forests.';
  } else if (input === 'what is universe') {
    return 'Everything that exists, including stars, galaxies, space, and time, governed by physical laws and still expanding, with mysteries waiting to be uncovered.';
  } else if (input === 'what is linux' || input === 'linux') {
    return 'A free and open-source computer operating system, highly customizable and widely used in devices from supercomputers to smartphones, with a large community of developers.';
  } else if (input === 'what is human') {
    return 'A living being with a brain, heart, and ability to think, learn, and communicate, with a complex social structure and emotions, capable of love, kindness, and creativity.';
  } else if (input === 'what is woman' || input === 'what is girl') {
    return 'An adult female human being, with unique characteristics, roles, and contributions to society, family, and culture, with strength, resilience, and beauty.';
  } else if (input === 'what is moon') {
    return 'The natural satellite that orbits around the Earth, influencing tides, stabilizing Earth\'s axis, and inspiring human imagination and exploration, with its own unique beauty and charm.';
  } else if (input === 'what is love') {
    return 'A strong feeling of affection, attachment, or devotion to another person, place, or thing, often characterized by feelings of warmth, tenderness, and deep caring.';
  } else if (input === 'what is computer') {
    return 'An electronic device that can store, process, and communicate information, performing tasks such as calculations, data storage, and communication, with various types including desktops, laptops, and mobile devices.';
  } else if (input === 'what is internet') {
    return 'A global system of interconnected computer networks that use the Internet Protocol to link devices worldwide, enabling communication, information sharing, and online services.';
  } else if (input === 'what is artificial intelligence' || input === 'ai' || input === 'what is ai') {
    return 'The development of computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making, with applications in areas like robotics, healthcare, and finance.';
  } else if (input === 'what is machine learning' || input === 'ml' || input === 'what is ml') {
    return 'A subset of artificial intelligence that involves training algorithms to learn from data and make predictions or decisions, without being explicitly programmed, with applications in areas like image recognition, natural language processing, and predictive analytics.';
  } else if (input === 'what is chatbot') {
    return 'A computer program that simulates human-like conversation, using natural language processing and machine learning to understand and respond to user inputs, often used in customer service, tech support, and entertainment.';
  } else if (input === 'can you have fun') {
    return 'I don\'t but i can give response if i know about it';
  } else if (input === 'how are you' || input === 'how are you doing') {
    return 'I\'m doing well, thanks!';
  } else if (input === 'i love you') {
    return 'i love you too!';
  } else if (input === 'what you know about') {
    return 'i know many things but not that much';
  } else if (input === 'what is dodo' || input === 'dodo' || input ==='what is dudu' || input === 'dudu') {
    return 'It is a round object which is used for hand exercise by pressing that object';
  } else if (input === 'what is your name') {
    return 'My name is botollama previously known as dodollama';
  } else if (input === 'goodbye') {
    return 'See you later!';
  } else if (input === 'thanks') {
    return 'You\'re welcome!';
  } else if (input === 'hey') {
    return 'Yes please';
  } else if (input.startsWith('hi my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else if ([
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
  ].includes(input)) {
  return 'Sorry! I can not do this at the point of time!';
  } else if (input.startsWith('hello my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else if (input === 'tell me a joke' || input === 'tell joke' || input === 'tell a joke' || input === 'can you tell me a joke' || input === 'could you tell a joke' || input === 'could you tell me a joke' || input === 'could you tell joke' || input === 'could you tell me joke' || input === 'can you tell a joke') {
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs.",
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
      "Why did the boy start doing bench presses? He had an break-up, now bench was the only thing left to press!",
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return randomJoke;
  }
}
