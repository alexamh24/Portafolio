const pokename = document.getElementById("poke-name");
const pokeimg = document.getElementById("poke-img");
const pokepeso = document.getElementById("poke-peso");
const pokealt = document.getElementById("poke-alt");
const tipos = document.getElementById("tipos");
// const one = document.getElementById("one");
const pokeaudio = document.getElementById("poke-audio");
// const estadisticah3 = document.querySelectorAll(".estadistica-h3");
const one = document.getElementById("one");
const two = document.getElementById("two");
// const estadisticah3 = document.getElementById("estadistica-h3");
// const tipoh3 = document.getElementById("tipo-h3");
const pokeBaseStats = document.querySelectorAll(".estadisticah3");

function handleInputChange(event){
    const inputValor = event.target.value;
    pokebuscar(inputValor);
}

function pokebuscar(nombre){
    const nameError = nombre.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${nameError}`)
    .then((response) => {
        if (response.status == 404){
            throw new Error("Pokémon no encontrado");
        } else{
            return response.json();
        }
    })

    .then((poke) => {
        if (poke !== undefined && nombre){
            console.clear();
            console.log(poke);
            tipos.innerHTML="";
            pokename.innerText=
                poke.name.charAt(0).toUpperCase() + 
                poke.name.slice(1);
            pokeimg.setAttribute("src",poke.sprites.other["official-artwork"].front_default);

            pokepeso.innerText =
                Math.round(poke.weight * 0.1) + " kg";
            pokealt.innerText =
                Math.round(poke.height * 0.1) + " m";

            poke.types.forEach((element) =>{
                const typeContainer = document.createElement("div");
                typeContainer.className = "tipo-h3";
                typeContainer.style.backgroundColor=`var(--${element.type.name})`;

                const type = document.createElement("h3");
                type.className="tipo-h3";
                type.innerText=
                    element.type.name.charAt(0).toUpperCase() +
                    element.type.name.slice(1);
                typeContainer.appendChild(type);
                tipos.appendChild(typeContainer);
            });

            if(poke.types.length > 1){
                one.style.background = `linear-gradient(to right, var(--${poke.types[0].type.name}), var(--${poke.types[1].type.name}))`
                two.style.background = `linear-gradient(to right, var(--${poke.types[0].type.name}), var(--${poke.types[1].type.name}))`
            } else{
                one.style.background = `linear-gradient(to right, var(--${poke.types[0].type.name}), var(--${poke.types[0].type.name}))`
                two.style.background = `linear-gradient(to right, var(--${poke.types[0].type.name}), var(--${poke.types[0].type.name}))`
            }
                
            for(let i = 0; i < pokeBaseStats.length; i++){
                const element = pokeBaseStats[i];
                element.innerText =
                    poke.stats[i].stat.name.toUpperCase() +
                    " : " +
                    poke.stats[i].base_stat;
            }
            pokeaudio.setAttribute("src", poke.cries.latest);
            pokeaudio.volume = 0.1;
        }   
    })
    .catch((error) => {
        window.alert(error.message);
    });
}   