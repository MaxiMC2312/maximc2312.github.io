function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (page === 'wiki') {
                initializeWiki();
            }
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<h1>Page Not Found</h1><p>The requested page was not found.</p>';
        });
}

function initializeWiki() {
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('searchInput').value;
        loadWikiPage(searchTerm);
    });
}

function loadWikiPage(term) {
    fetch(`wiki/${term}.html`)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                return '<h1>Page Not Found</h1><p>The requested wiki page was not found.</p>';
            }
        })
        .then(data => {
            document.getElementById('wikiContent').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('wikiContent').innerHTML = '<h1>Error</h1><p>There was an error loading the wiki page.</p>';
        });
}

// Load the home page by default
window.onload = () => loadPage('home');
