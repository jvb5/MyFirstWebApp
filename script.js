document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const message = 'Hello, ' + name + '! Nice to meet you!';
    document.getElementById('greetingMessage').textContent = message;
});
