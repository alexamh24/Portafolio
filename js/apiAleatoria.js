// const id = document.getElementById("id");
// const name = document.getElementById("name");
const nombre = document.getElementById("name");
const ID = document.getElementById("ID");
const estado = document.getElementById("status");
const species = document.getElementById("species");
const gender = document.getElementById("gender");
const imagenRM = document.getElementById("imagenRM");
const episode = document.getElementById("episode");

// EPISODIO https://rickandmortyapi.com/api/episode/28
// IMAGE https://rickandmortyapi.com/api/character/avatar/74.jpeg"

function handleInputChange(event){
    const inputValor = event.target.value;
    buscarRM(inputValor);
}

function buscarRM(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
   
    .then((personaje) =>{
        console.log(personaje);

        nombre.innerText= personaje.name.charAt(0).toUpperCase() + personaje.name.slice(1);
        ID.innerText= personaje.id;
        estado.innerText = personaje.status;
        species.innerText = personaje.species;
        gender.innerText = personaje.gender;  
        imagenRM.setAttribute("src",personaje.image);
        episode.innerText = personaje.episode;  
    })

}