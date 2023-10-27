//Promesas
const API = 'https://dog.ceo/api/breeds/image/random';


function getImage(){
    return new Promise(function(resolve, reject){
        let peticion = new XMLHttpRequest();
        peticion.open('GET', API);
        peticion.send();
        peticion.addEventListener('load', () => {
            if(peticion.status == 200){
                resolve(JSON.parse(peticion.responseText));
            }else{
                reject("Error " + this.status + " (" + this.statusText + ") en la petición");
            }
        })
        peticion.addEventListener('error', () => reject("Error en la petición HTTP"));
    })
}