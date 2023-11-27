//Comparación de Dos Números

let num1 = Number(prompt("Ingrese el primer numero 1:"));
let num2 = Number(prompt("Ingrese el primer numero 2:"));
if (num1 > num2) {
    alert(`El numero 1 (${num1}) es mayor que el numero 2 (${num2})`);
} else if (num1 < num2) {
    alert(`El numero 2 (${num2}) es mayor que el numero 1 (${num1})`);
} else {
    alert("Ambos numeros son iguales y son: " + num1);
}

location.reload()
