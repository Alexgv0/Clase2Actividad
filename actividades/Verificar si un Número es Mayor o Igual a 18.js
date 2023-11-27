//Verificar si un Número es Mayor o Igual a 18

let num1 = Number(prompt("Introduce un numero: "));

if (num1 > 18) {
    alert("El numero " + num1 + " es mayor que 18");
} else if (num1 < 18) {
    alert("El numero " + num1 + " es menor que 18");
} else {
    alert("El numero es 18");
}

location.reload()