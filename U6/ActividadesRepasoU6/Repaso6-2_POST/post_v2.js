function submitComment() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const userId = document.getElementById('userId').value;

    // Realizar la petición POST usando API Fetch
    sendComment(name, title, body, userId)
        .then(response => {
            document.getElementById('resultMessage').innerText = `Comentario introducido correctamente. ID: ${response.id}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultMessage').innerText = 'Error al introducir el comentario.';
        });
}

function sendComment(name, title, body, userId) {
    const data = {
        name: name,
        title: title,
        body: body,
        userId: parseInt(userId)
    };

    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}