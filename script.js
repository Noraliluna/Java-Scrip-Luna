/*
let productos = parseFloat(prompt("¿Cuántas prendas compra?"));
let acumulador = 0;
let contador = 0;

for (let i = 0; i < productos; i++){
    let precio = parseInt(prompt("Ingrese precio"));
   
    if (isNaN(precio)) {
        console.log("Número no valido. Evite el uso de puntos y comas.")
        continue
    }
    acumulador += precio;
    contador++
    console.log(acumulador)
    console.log(contador)
}

let tarjeta = prompt("Ingrese su tarjeta").toLowerCase();

const DESC1 = 0.3;
const DESC2 = 0.2;
const DESC3 = 0.15;


function calcularDescuento(descuento){
    return acumulador*descuento;
}
function total(a){
    return acumulador - a;
}

if (tarjeta == "santander"){
    if (acumulador >= 3000){
        calcularDescuento(DESC1);
        console.log ("El total de su compra es: $" + (acumulador) + ". Se le descuenta el 30%, abonará en total $" + (total(calcularDescuento(DESC1))));
    }else{
        console.log("No se le efectura el descuento.")
    }
} else if (tarjeta == "ciudad"){
    if (acumulador >= 1000){
        calcularDescuento(DESC2);
        console.log ("El total de su compra es: $" + (acumulador) + ". Se le descuenta el 20%, abonará en total $" + (total(calcularDescuento(DESC2))));
    }else{
        console.log("No se le efectura el descuento.")
    }
} else if (tarjeta == "frances"){
    if (acumulador >= 5000){
        calcularDescuento(DESC3);
        console.log ("El total de su compra es: $" + (acumulador) + ". Se le descuenta el 15%, abonará en total $" + (total(calcularDescuento(DESC3))));
    }else{
        console.log("No se le efectura el descuento.")
    }
}
*/

class Mercaderia {
    constructor (nombre, talle, color, precio){
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}

const producto001 = new Mercaderia("Tapado", "M", "Negro", 24000);
const producto002 = new Mercaderia("Remera Lisa", "S", "Bordo", 700);
const producto003 = new Mercaderia("Campera Polar", "M", "Mostaza", 10000);
const producto004 = new Mercaderia("Pantalon Cuadrille", "M", "Gris", 3000);
const producto005 = new Mercaderia("Camisa Leñadora", "M", "Amarilla", 1000);
const producto006 = new Mercaderia("Blusa Floreada", "L", "Gris", 4000);
const producto007 = new Mercaderia("Tapado Paris", "M", "Gris y Negro", 20000);
const producto008 = new Mercaderia("Tapado", "M", "Gris", 15000);
const producto009 = new Mercaderia("Pantalon", "M", "Azul", 4000);
const producto010 = new Mercaderia("Remera", "M", "Blanca", 1000);

const productos = [producto001, producto002, producto003, producto004, producto005
, producto006, producto007, producto008, producto009, producto010];

console.log(productos);

/*ARMANDO MI CARRITO*/

let inicio = (prompt("¿Desea agregar este producto a su carrito?")).toLocaleLowerCase;

if (inicio == "si"){
    const carrito = [productos.slice(0, 9, 3)];

    console.log(carrito)
}else{
    console.log("Agradecemos su visita por nuestra página.")
}