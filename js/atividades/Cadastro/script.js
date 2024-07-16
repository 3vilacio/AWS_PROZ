// Selecionando o formulário e o contêiner de produtos
const formProduto = document.getElementById('formProduto');
const produtoContainer = document.getElementById('produto-container');

// Evento de envio do formulário
formProduto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Capturando os valores digitados
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);

    // Validando se o preço é um número válido
    if (isNaN(preco)) {
        alert('Por favor, insira um valor numérico para o preço.');
        return;
    }

    // Criando o elemento do produto
    const produto = document.createElement('div');
    produto.classList.add('produto');

    // Adicionando nome do produto
    const nomeProduto = document.createElement('h2');
    nomeProduto.textContent = nome;
    produto.appendChild(nomeProduto);

    // Adicionando descrição do produto
    const descricaoProduto = document.createElement('p');
    descricaoProduto.textContent = descricao;
    produto.appendChild(descricaoProduto);

    // Adicionando preço do produto
    const precoProduto = document.createElement('p');
    precoProduto.textContent = `Preço: R$ ${preco.toFixed(2)}`;
    produto.appendChild(precoProduto);

    // Adicionando o produto ao contêiner de produtos
    produtoContainer.appendChild(produto);

    // Limpa o formulário após o cadastro
    formProduto.reset();
});
