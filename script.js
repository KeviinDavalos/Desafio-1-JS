//Pedirle al usuario un numero para luego escribir la tabla de multiplicar
// let num = parseInt(prompt("Ingrese un numero para detallar la tabla"));
// for (i = 1; i<=10; i++){
//     multiresul = num *i;
//     console.log(num + "X"+ i + "=" + multiresul);
// }

//Pedir un numero por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada.
let num = parseInt(prompt("Ingrese un numero para escribir la cantidad de veces Hola"))
let palabra = "Hola"
for (let i = 1; i<=num; i++){
    console.log(i + " " + palabra);
}