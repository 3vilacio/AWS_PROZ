document.createElement("li");

let elementoJavaScript = document.createElement("li");

//console.log(elementoJavaScript);
elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"

let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavaScript);

console.log(listaLinguagens);