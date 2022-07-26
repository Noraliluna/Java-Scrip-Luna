
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


if (tarjeta == "santander"){
    if (acumulador >= 3000){
        let descuento1 = acumulador*DESC1;
        console.log ("El total de su compra es: $" + (acumulador) + ". Se le descuenta el 30%, abonará en total $" + (acumulador-descuento1));
    }else{
        console.log("No se le efectura el descuento.")
    }
} else if (tarjeta == "ciudad"){
    if (acumulador >= 1000){
        let descuento2 = acumulador*DESC2;
        console.log ("El total de su compra es: $" + (acumulador) + ". Se le descuenta el 20%, abonará en total $" + (acumulador-descuento2));
    }else{
        console.log("No se le efectura el descuento.")
    }
} else if (tarjeta == "frances"){
    if (acumulador >= 5000){
        let descuento3 = acumulador*DESC3;
        console.log ("El total de su compra es: $" + (acumulador) + ". Se le descuenta el 15%, abonará en total $" + (acumulador-descuento3));
    }else{
        console.log("No se le efectura el descuento.")
    }
}