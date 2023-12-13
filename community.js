function sendMessage() {
  var nameInput = document.getElementById('name');
  var messageInput = document.getElementById('message');
  var chatMessages = document.getElementById('chat-messages');

  var name = nameInput.value.trim();
  var message = messageInput.value.trim();

  if (name !== '' && message !== '') {
    var messageElement = document.createElement('div');
    messageElement.innerHTML = '<strong>' + name + ':</strong> ' + message;
    chatMessages.appendChild(messageElement);

    // Clear input fields after sending the message
    nameInput.value = '';
    messageInput.value = '';

    // Optional: Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}