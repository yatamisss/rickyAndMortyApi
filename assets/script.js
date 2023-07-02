let api = 'https://rickandmortyapi.com/api/character'
let personajes = undefined;

class Personaje {
    constructor(nombre, especie, imagen) {
        this.nombre = nombre;
        this.especie = especie;
        this.imagen = imagen;
    }
    get informacion() {
        return `El nombre de este personaje es ${this.nombre} y es de la especie ${this.especie}`;
    }
}

axios.get("https://rickandmortyapi.com/api/character").then(respuesta => {
    console.log(respuesta.data);
    personajes = respuesta.data.results;
    personajes.map((item) => {
        let personaje1 = new Personaje(item.name, item.species, item.image)
        show(personaje1)
    })
})
    .catch((error) => {
        console.log(error);
    })

const show = (personaje1) => {
    let id = document.querySelector('#tarjetas');
    id.innerHTML += `<div class="contenido"><div class="contenido__tarjeta"<div>${personaje1.informacion}</div><hr><img src="${personaje1.imagen}"/></div></div>`;
}






