function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<h1>Page Not Found</h1><p>The requested page was not found.</p>';
        });
}

// Load the home page by default
window.onload = () => loadPage('home');
