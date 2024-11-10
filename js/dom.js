let titulo = document.getElementById("titulo");
console.log(titulo.textContent);

let parrafos = document.getElementsByTagName("p");
console.table(parrafos);

let parrafos2 = document.getElementsByClassName("parrafo");
console.log(parrafos2[1].textContent);

let parrafo = document.querySelector(".parrafo");
console.log(parrafo.textContent);

// #35
// let titulo = document.getElementById("titulo");
titulo.style.color = "red";
// let parrafos = document.getElementsByTagName("p");
Array.from(parrafos).forEach((element, index) => {
element.innerText = "Nuevo párrafo " + (index + 1);
});
// let parrafos2 = document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo párrafo</strong>";
// let parrafo = document.querySelector(".parrafo");
parrafo.className = "nuevo-parrafo";


// 08/11/2024 viernes en #40
let parrafoNew = document.createElement("p");
parrafoNew.innerText = "Este párrafo tiene un emoji 💗";
document.body.appendChild(parrafoNew);
console.log(parrafoNew);

//elementos nuevos agg
let h1 = document.querySelector("h1");
h1.innerText = "Título dinámico" //~~
let hr = document.createElement("hr");

let nuevoParrafo = document.createElement("p");
document.body.insertBefore(nuevoParrafo, h1);
// document.body.insertAfter(hr, nuevoParrafo);

parrafoNew.prepend(h1);
// parrafoNew.parentElement.appendChild(hr);
parrafoNew.prepend(hr);
// parrafoNew.append(hr);

//Elimina elementos que ya existen
// let ultimo = parrafos[3];
// ultimo.remove();

// hasta la #43
let padre_parrafo = parrafoNew.parentElement;
console.log(padre_parrafo);

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++){
    let item = document.createElement("li");
    item.innerText = `Elemento ${i}`;
    lista.appendChild(item);
}
padre_parrafo.appendChild(lista);

// document.body.innerHTML='';
