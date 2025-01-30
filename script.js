// Function to post a greeting
function postGreeting() {
    const message = document.getElementById('message').value;
    const sender = document.getElementById('sender').value || 'Anonymous';

    // Create a new greeting element
    const greetingElement = document.createElement('div');
    greetingElement.className = 'greeting';
    greetingElement.innerHTML = `
        <p>${message}</p>
        <p class="sender">- ${sender}</p>
    `;

    // Add the greeting to the list
    document.getElementById('greetings').appendChild(greetingElement);

    // Clear the form
    document.getElementById('message').value = '';
    document.getElementById('sender').value = '';
}
