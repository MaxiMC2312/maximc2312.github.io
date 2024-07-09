function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<h1>Seite nicht gefunden</h1><p>Die angeforderte Seite wurde nicht gefunden.</p>';
        });
}

// Standardmäßig die Startseite laden
window.onload = () => loadPage('home');
