
let variabile = "pippo";

if (variabile == 5) {
    console.log('La variabile vale 5');
} else if (variabile == 4) {
    console.log('La variabile vale 4');
} else if (variabile == 'pippo'){
    console.log('La variabile vale pippo');
} else {
    console.log('La variabile ha un valore diverso da 4 e 5');
}

switch (variabile) {
    case 5: 
        console.log('La variabile vale 5');
        break;
    case 4: 
        console.log('La variabile vale 4');
        break;
    case "pippo": 
        console.log('La variabile vale pippo');
        break;
    default: 
        console.log('La variabile ha un valore diverso da 4 e 5');
}