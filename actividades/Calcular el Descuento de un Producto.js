//Calcular el Descuento de un Producto

let num1 = parseFloat(prompt("Ingrese el valor del producto:"));
let num2 = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

alert("El descuento es de " + ((num1*num2)/100));

location.reload()