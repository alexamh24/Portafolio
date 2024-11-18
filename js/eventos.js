function saludar(){
    let salida = document.getElementById("salida_boton");
    salida.innerText = "Hola desde la función saludar";
}

let otro_boton = document.getElementById("otro_boton");

otro_boton.addEventListener("click",
    function(){
        let salida = document.getElementById("salida_otro");
        salida.innerText = "Otro saludo 🌸";
});

otro_boton.addEventListener("mouseenter", 
    function(){
    this.innerText = "Entró el mouse";
});

otro_boton.addEventListener("mouseleave",
    function(){
    this.innerText = " Salió el mouse";
});

// otro_boton.addEventListener("mousemove",
//     function(){
//     this.innerText = " 🐭 ";
// });

let nombreText = document.getElementById("nombre");
let salida_teclado = document.getElementById("salida_teclado");

nombreText.addEventListener("keydown",
    function(event){
    salida_teclado.innerText = `Se presionó ${event.key}`; // <kbd>   </kbd>
});


// let formulario = document.querySelector("form");
// formulario.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("Formulario enviado");
//     alert("Se intento procesar el formulario");
// });

let miform = document.getElementById("miform");
miform.addEventListener("submit",
    function(event) {
    event.preventDefault();
    let atxt = document.getElementById("a");
    let btxt = document.getElementById("b");
    // console.log(a,b);
    //     alert("Se intento procesar el formulario");
    let salida = document.getElementById("salida_suma");
    let a = parseInt(atxt.value);
    let b = parseInt(btxt.value);
    let resultado = a + b;
    salida.innerText = resultado;
});