async function submitComment() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const userId = document.getElementById('userId').value;

    try {
        // Realizar la petición POST usando async/await
        const response = await sendComment(name, title, body, userId);
        document.getElementById('resultMessage').innerText = `Comentario introducido correctamente. ID: ${response.id}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultMessage').innerText = 'Error al introducir el comentario.';
    }
}

async function sendComment(name, title, body, userId) {
    const data = {
        name: name,
        title: title,
        body: body,
        userId: parseInt(userId)
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}