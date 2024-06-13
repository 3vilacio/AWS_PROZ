// Capturação dos elementos
const titulo = document.querySelector('#titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.querySelector('#lista-ordenada');

// Adicionando conteúdo ao título e ao link
titulo.innerText = 'Título do Projeto';
link.innerText = 'Visite a Proz Educação';

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens à lista ordenada com links
listaOrdenada.innerHTML = `
    <li><a href="https://site1.com">Link para o site 1</a></li>
    <li><a href="https://site2.com">Link para o site 2</a></li>
    <li><a href="https://site3.com">Link para o site 3</a></li>
`;
