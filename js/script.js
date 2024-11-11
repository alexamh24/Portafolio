<<<<<<< HEAD
//LUNES SINTAXIS
console.log("Hola, mundo desde un archivo externo!");

//TIPOS DE DATOS
// let cadena = "Hola mundo!";
let numero=42;
let logico = true;
let nulo = null;
let indefinido = undefined;
let simbolo = Symbol("foo");

console.log(numero, logico, nulo, indefinido, simbolo);

let nombre = "Alexa";
let edad = 20;
let objeto = { nombre: "Alexa MH", edad: 20 };
let numeros = [1, 2, 3, 4, 5];

function suma(a, b) {
    return a + b;
}
let fecha=new Date();
let patron = /ab+c/;
let error = new Error("Error de prueba");

console.table(objeto);
console.table(numeros); // tabla ~~0 a 4~~1 a 5~~
console.log(suma(30,7)); //37
console.log(fecha); //fecha actual



// hoisting OPERADORES
let a=5;
let b=3;

let resultado=((a+b-2)*3)/2;
console.log(resultado); //9
resultado +=1;

console.log(a>b); //vrd
console.log(a===b); //falso, se compara el valor y el tipo

console.log(resultado % 3 == 0 ? "👍" : "👎");

let cadena ="Hola," + "mundo!";
console.log(cadena); //Hola,mundo!

//CONDICIONALES
let yedad = 20;

if(yedad>=18){
    console.info("Eres mayor de edad");
    console.warn("Eres mayor de edad");
} else {
    console.info("Eres menor de edad");
    console.warn("Eres menor de edad");
}


let anio = parseInt(prompt("En que año naciste?"));
let anio_actual = new Date().getFullYear();
yyedad = anio_actual - anio;

if (yyedad >= 18) {
console.log("Eres un adulto");
    } else if (edad >= 12 && edad < 18) {
if (yyedad == 12) {
 console.log("Eres un preadolescente");
 } else {
 console.log("Eres un adolescente");
 }
 } else {
    console.warn("Eres un niño");
 }

// 2:40 arriba 
let dia = prompt("Ingresa un número del 1 al 7");
dia +=0;
 switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.error("Día no válido");
    }

    // FUNCIONES miercoles 06 11 2024
let resta = function(a,b){
    return a-b;
};
console.log(resta(5,3));//2

//FUNCIONES
let multiplicacion = (a,b) => a * b;
console.log(multiplicacion(5,3)); //15


objeto={
    nombre: "Alexa MH",
    saludar: function(){
        setTimeout(() =>{
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    },
};
objeto.saludar();
// ARREGLOS

let arreglo = new Array(1,2,3,4,5);
let colores = ["rojo", "verde","azul"];

console.log(colores[1]); //rojo

let frutas = ["🍎","🍐","🍇","🍓"];
frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas); //plátano, manzana, pera, uva,fresa

let frutas2 = frutas.slice(1, 3);
console.log(frutas2.join(" - ")); // 🍎 - 🍐
console.log(frutas.length); // 5
console.log(frutas.indexOf("🍇")); // 3

let frutas3 = frutas.map((fruta) => fruta + "🍉");
console.table(frutas3);
=======
//LUNES SINTAXIS
console.log("Hola, mundo desde un archivo externo!");

//TIPOS DE DATOS
// let cadena = "Hola mundo!";
let numero=42;
let logico = true;
let nulo = null;
let indefinido = undefined;
let simbolo = Symbol("foo");

console.log(numero, logico, nulo, indefinido, simbolo);

let nombre = "Alexa";
let edad = 20;
let objeto = { nombre: "Alexa MH", edad: 20 };
let numeros = [1, 2, 3, 4, 5];

function suma(a, b) {
    return a + b;
}
let fecha=new Date();
let patron = /ab+c/;
let error = new Error("Error de prueba");

console.table(objeto);
console.table(numeros); // tabla ~~0 a 4~~1 a 5~~
console.log(suma(30,7)); //37
console.log(fecha); //fecha actual



// hoisting OPERADORES
let a=5;
let b=3;

let resultado=((a+b-2)*3)/2;
console.log(resultado); //9
resultado +=1;

console.log(a>b); //vrd
console.log(a===b); //falso, se compara el valor y el tipo

console.log(resultado % 3 == 0 ? "👍" : "👎");

let cadena ="Hola," + "mundo!";
console.log(cadena); //Hola,mundo!

//CONDICIONALES
let yedad = 20;

if(yedad>=18){
    console.info("Eres mayor de edad");
    console.warn("Eres mayor de edad");
} else {
    console.info("Eres menor de edad");
    console.warn("Eres menor de edad");
}


let anio = parseInt(prompt("En que año naciste?"));
let anio_actual = new Date().getFullYear();
yyedad = anio_actual - anio;

if (yyedad >= 18) {
console.log("Eres un adulto");
    } else if (edad >= 12 && edad < 18) {
if (yyedad == 12) {
 console.log("Eres un preadolescente");
 } else {
 console.log("Eres un adolescente");
 }
 } else {
    console.warn("Eres un niño");
 }

// 2:40 arriba 
let dia = prompt("Ingresa un número del 1 al 7");
dia +=0;
 switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.error("Día no válido");
    }

    // FUNCIONES miercoles 06 11 2024
let resta = function(a,b){
    return a-b;
};
console.log(resta(5,3));//2

//FUNCIONES
let multiplicacion = (a,b) => a * b;
console.log(multiplicacion(5,3)); //15


objeto={
    nombre: "Alexa MH",
    saludar: function(){
        setTimeout(() =>{
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    },
};
objeto.saludar();
// ARREGLOS

let arreglo = new Array(1,2,3,4,5);
let colores = ["rojo", "verde","azul"];

console.log(colores[1]); //rojo

let frutas = ["🍎","🍐","🍇","🍓"];
frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas); //plátano, manzana, pera, uva,fresa

let frutas2 = frutas.slice(1, 3);
console.log(frutas2.join(" - ")); // 🍎 - 🍐
console.log(frutas.length); // 5
console.log(frutas.indexOf("🍇")); // 3

let frutas3 = frutas.map((fruta) => fruta + "🍉");
console.table(frutas3);
>>>>>>> e35872f7b015c01122f43411c208aeb02a3cb4ed
