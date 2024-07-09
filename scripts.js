function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (page === 'contact') {
                initializeContactForm();
            }
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<h1>Seite nicht gefunden</h1><p>Die angeforderte Seite wurde nicht gefunden.</p>';
        });
}

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        // Hier könnten Sie eine Anfrage an einen Server senden, z.B. mit fetch:
        // fetch('https://example.com/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //   .then(result => console.log(result));
        
        // Temporäre Bestätigung für Demonstrationszwecke
        alert('Nachricht gesendet! Name: ' + data.name + ', Email: ' + data.email + ', Nachricht: ' + data.message);
    });
}

// Standardmäßig die Startseite laden
window.onload = () => loadPage('home');
