function submitComment() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const userId = document.getElementById('userId').value;

    // Realizar la petición POST usando Promesas
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
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status === 201) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function () {
            reject('Error en la petición HTTP');
        };

        const data = {
            name: name,
            title: title,
            body: body,
            userId: parseInt(userId)
        };

        xhr.send(JSON.stringify(data));
    });
}