//Determinar si un Número es Positivo, Negativo o Cero

let num1 = Number(prompt("Ingrese un numero:"));

if (num1 > 0) {
    alert("El numero " + num1 + " es positivo");
} else if (num1 < 0) {
    alert("El numero " + num1 + " es negativo");
} else {
    alert("El numero es 0");
}

location.reload()