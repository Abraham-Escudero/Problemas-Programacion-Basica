// Hacer un programa que imprima los números pares entre 0 y 100.
function numPares(){
    let numero = 0;
    while (numero <= 100 && numero >= 0){
        console.log(numero);
        numero += 2
    }
}

numPares()