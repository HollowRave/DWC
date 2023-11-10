// //Promesas
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

// Función que realiza una petición GET para obtener una URL de imagen aleatoria de perros
function getImage() {
    return new Promise(function (resolve, reject) {
        // Crea una nueva instancia de XMLHttpRequest
        let peticion = new XMLHttpRequest();

        // Configura la petición GET con la URL del servicio
        peticion.open('GET', API);

        // Envía la petición
        peticion.send();

        // Maneja el evento de carga de la petición
        peticion.addEventListener('load', function () {
            // Verifica si la petición fue exitosa (código 200)
            if (peticion.status == 200) {
                // Parsea la respuesta JSON para obtener la URL de la imagen
                let imageUrl = JSON.parse(peticion.responseText).message;
                // Resuelve la promesa con la URL de la imagen
                resolve(imageUrl);
            } else {
                // Rechaza la promesa con un mensaje de error
                reject('Error ' + this.status + ' (' + this.statusText + ') en la petición');
            }
        });

        // Maneja el evento de error de la petición
        peticion.addEventListener('error', function () {
            // Rechaza la promesa con un mensaje de error
            reject('Error en la petición HTTP');
        });
    });
}