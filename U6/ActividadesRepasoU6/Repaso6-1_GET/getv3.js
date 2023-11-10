//async/await
const API = 'https://dog.ceo/api/breeds/image/random';

// Espera a que la página se cargue completamente antes de ejecutar el script
window.addEventListener('load', function () {
    // Selecciona el elemento con la clase 'imagen'
    let imagenDiv = document.querySelector('.imagen');

    // Llama a la función getImage() y maneja la promesa resultante
    getImage().then(function (imageUrl) {
                // Crea un elemento de imagen
            let img = document.createElement('img');
            // Establece la fuente de la imagen con la URL obtenida
            img.src = imageUrl;
            // Agrega la imagen al div con la clase 'imagen'
            imagenDiv.appendChild(img);
        }).catch(function (error) {
            console.error('Error:', error);
        });
});

// Función asincrónica para obtener la imagen mediante una petición Fetch
async function getImage() {
    // Realiza una petición Fetch a la URL de la API
    const response = await fetch(API);

    // Verifica si la respuesta es exitosa (código 2xx)
    if (!response.ok) {
        // Si hay un error, lanza una excepción con el mensaje correspondiente
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convierte la respuesta a formato JSON
    const data = await response.json();

    // Devuelve la URL de la imagen
    return data.message;
}