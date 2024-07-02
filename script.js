const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const messageContainer = document.getElementById("message-container");

sendButton.addEventListener("click", async () => {
    const input = userInput.value.trim();
    if (input !== "") {
        userInput.value = "";
        const response = await fetch(`https://your-ollama-server-ip:port/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input }),
        });
        const responseData = await response.json();
        const messageHTML = `
            <div class="chat-message">
                <span class="username">You:</span>
                <span class="message">${input}</span>
            </div>
            <div class="chat-message">
                <span class="username">OLLA:</span>
                <span class="message">${responseData.response}</span>
            </div>
        `;
        messageContainer.innerHTML += messageHTML;
    }
});
