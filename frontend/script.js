function sendMessage() {
    let inputField = document.getElementById('user-input');
    let message = inputField.value.trim();
    if (message === '') return;

    let chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

    fetch('http://127.0.0.1:5000/ask', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: message })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Bot response:", data.answer);
        chatBox.innerHTML += `<p><strong>Bot:</strong></p>`;
        chatBox.innerHTML += data.answer;  // Render the HTML response
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    inputField.value = '';
}