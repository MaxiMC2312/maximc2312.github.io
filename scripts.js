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
            document.getElementById('content').innerHTML = '<h1>Page Not Found</h1><p>The requested page was not found.</p>';
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
        // Here you would send the data to a server, e.g., with fetch:
        // fetch('https://example.com/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //   .then(result => console.log(result));
        
        // Temporary confirmation for demonstration purposes
        alert('Message sent! Name: ' + data.name + ', Email: ' + data.email + ', Message: ' + data.message);
    });
}

// Load the home page by default
window.onload = () => loadPage('home');
