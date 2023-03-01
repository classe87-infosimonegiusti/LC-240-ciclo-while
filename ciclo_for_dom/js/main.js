const listaSpesa = [
    "Pane",
    "Latte", 
    "Uova",
    "Mele",
    "Pere",
    "Mandarini"
];

const listaDom = document.getElementById('lista');

for (let i = 0; i < listaSpesa.length; i++) {
    //listaDom.innerHTML += `<li>${listaSpesa[i]}</li>`
    const listItem = document.createElement('li'); // <li></li>
    //listItem.append(listaSpesa[i]); 
    listItem.innerText = listaSpesa[i];
    listaDom.append(listItem);
}