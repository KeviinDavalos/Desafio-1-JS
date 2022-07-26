//Pedirle al usuario un numero para luego escribir la tabla de multiplicar
let num = parseInt(prompt("Ingrese un numero para detallar la tabla"));
for (i = 1; i<=10; i++){
    multiresul = num *i;
    console.log(num + "X"+ i + "=" + multiresul);
}