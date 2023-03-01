
/*
    let numero = parseInt(prompt("Inserisci un numero"));

    while(isNaN(numero)) {
        numero = parseInt(prompt("Inserisci un numero")); 
        console.log(numero);
    }
*/

let numero;

do {
    numero = parseInt(prompt("Inserisci un numero"));
} while (isNaN(numero))
