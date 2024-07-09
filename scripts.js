function loadPage(page) {
    const content = document.getElementById('content');
    switch(page) {
        case 'home':
            content.innerHTML = '<h1>Willkommen auf der Startseite</h1><p>Dies ist die Startseite der Website.</p>';
            break;
        case 'about':
            content.innerHTML = '<h1>Über uns</h1><p>Hier finden Sie Informationen über uns.</p>';
            break;
        case 'contact':
            content.innerHTML = '<h1>Kontakt</h1><p>Hier können Sie uns kontaktieren.</p>';
            break;
        default:
            content.innerHTML = '<h1>Seite nicht gefunden</h1><p>Die angeforderte Seite wurde nicht gefunden.</p>';
    }
}

// Standardmäßig die Startseite laden
window.onload = () => loadPage('home');
