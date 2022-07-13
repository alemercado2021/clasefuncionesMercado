const productos = prompt("Ingrese la cantidad de productos que quiere comprar")
var cantidadProductos = parseInt(productos)
var i = cantidadProductos
var precioBruto = 0
while (i > 0) {
    const precioProducto = prompt("ingrese el precio de un producto")
    var precio = parseInt(precioProducto)
    console.log("Precio del producto:"+precioProducto)
    precioBruto = precioBruto + precio
    i = i -1 
}
console.log("El precio bruto es de:"+precioBruto)
document.write("<h2>El precio bruto de los productos es de:"+precioBruto+"</h2>");
/*Calcular el iva*/
function calcularIva (precioBruto){
    return (precioBruto * 0.21)
}
var iva = calcularIva(precioBruto);
iva = iva.toFixed(2)
console.log("El iva que se le sumara a su compra es de:"+iva)
document.write("<h2>El iva que se le sumara a su compra es de:"+iva+"</h2>");
/*Sumarle el iva al precio total*/
iva = parseInt(iva)
precioBruto = parseInt(precioBruto)
var precioTotal = precioBruto + iva
console.log(precioTotal)
document.write("<h2>El precio final de su compra es de:"+precioTotal+"</h2>");
/*Forma de pago*/
const pago = prompt("Quiere hacer el pago en cuotas?Ingrese si o no")
if (pago.toLowerCase() === 'si' || pago.toLowerCase() === 'no'){
    if (pago === 'si'){
        var cuotas = prompt("Ingrese la cantidad la cantidad de cuotas")
        cuotas = parseInt(cuotas)
        var precioCuotas = precioTotal / cuotas
        precioCuotas = precioCuotas .toFixed(2)
        console.log("Usted debera pagar "+cuotas+" cuotas del valor de "+precioCuotas)
        document.write("<h2>Usted debera pagar "+cuotas+" cuotas del valor de "+precioCuotas+"</h2>");
    }
    if (pago === 'no'){
        console.log("Usted debera pagar "+precioTotal)
        document.write("<h2>Usted debera pagar "+precioTotal+"</h2>");
    }
}
else{
    alert("usted no ingreso una respuesta correcta, es Si o No")
}
