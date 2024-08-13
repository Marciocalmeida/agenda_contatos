const form = document.getElementById('contato-form');
const tabelaContatos = document.getElementById('tabela-contatos');
const contatos = new Map();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value;
    const telefone = form.telefone.value;


    if (contatos.has(nome) || Array.from(contatos.values()).includes(telefone)) {
        alert('Nome ou telefone já foi inserido!');
        return;
    }

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
    tabelaContatos.appendChild(novaLinha);

    contatos.set(nome, telefone);


    form.reset();
});