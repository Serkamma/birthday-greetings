document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (message) {
        const messagesList = document.getElementById('messagesList');
        const listItem = document.createElement('li');
        listItem.textContent = message;
        messagesList.appendChild(listItem);
        
        messageInput.value = ''; // Clear the input
    }
});
