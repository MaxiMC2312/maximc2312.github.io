function changeText() {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.textContent = 'Der Text wurde geändert!';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Das Formular wurde erfolgreich abgesendet!');
});
