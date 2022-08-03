// ------------- Desafio 3 ------------

class Producto {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
    }
}

const producto1 = new Producto("Espejo circular", 1, 4000)
const producto2 = new Producto("Espejo rectangulo", 1, 7000)
const producto3 = new Producto("Espejo Especial", 1, 10000)

const productos = [producto1, producto2, producto3]
productos.pop()
productos.push(new Producto("Espejo Personalizado", 1, 9000))
console.log(productos)
console.log("Se elimino del carrito el Espejo Especial y se agrego el Espejo Personalizados")



// ---------- Desafio 1 -----------
//Pedirle al usuario un numero para luego escribir la tabla de multiplicar
/*let num = parseInt(prompt("Ingrese un numero para detallar la tabla"));
for (i = 1; i<=10; i++){
    multiresul = num *i;
    console.log(num + "X"+ i + "=" + multiresul);
}

//Pedir un numero por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada.
let num = parseInt(prompt("Ingrese un numero para escribir la cantidad de veces Hola"))
let palabra = "Hola"
for (let i = 1; i<=num; i++){
    console.log(i + " " + palabra);
}
*/

// ---------- Desafio 2 ------------
/*function saludo() {
    alert('¡Hola!, Bienvenido marca una opcion en la siguiente casilla y te dire de que elemento es tu signo');
}
saludo();

let opcion;

do{
    opcion = prompt('Ingresa la opcion que este tu signo:\n\n1 - Tauro, Virgo, Capricornio. \n2 - Géminis, Libra, Acuario. \n3 - Cáncer, Escorpio, Piscis.\n\n Para salir ingrese el número 4.')

    switch (opcion) {
        case '1':
            console.log('Eres un signo de tierra');
            break;
        case '2':
            console.log('Eres un signo de aire');
            break;
        case '3':
            console.log('Eres un signo de agua');
            break;
        case '4':
            console.log('Adios');
            break;
        default:
            console.log('Ingrese una opción válida');
            break;
    }
}while(opcion !='4')
*/


