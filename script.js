 const chatBody = document.querySelector(".chat-body");
 const messageInput = document.querySelector(".message-input");
    

 //Create a message element with dynamic classes and return it
 const createMessageElement = (content,classes) => {
    const div = document.createElement("div");
    div.classList.add("message",classes);
    div.innerHTML = content;
    return div;
 }
//Handle outgoing user message
     const handleOutgoingMessage = (userMessage) => {
    // create and display user messages
    const messageContent = `<div class="message-text">${userMessage}</div>`;
    const outgoingMessageDiv = createMessageElement(messageContent,"user-message");
    chatBody.appendChild(outgoingMessageDiv);
 }

 //Handle Enter Key press  for Sending messages
 messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if (e.key === "Enter" && userMessage) {
        handleOutgoingMessage(userMessage);
    }
 });
