
const destinos = [
    {
        nome: "Sagrada Família",
        cidade: "Barcelona",
        quantidade: 2,
        preco: 120.00
    },
    {
        nome: "Palácio Real",
        cidade: "Madrid",
        quantidade: 1,
        preco: 80.00
    },
    {
        nome: "Alhambra",
        cidade: "Granada",
        quantidade: 2,
        preco: 150.00
    },
    {
        nome: "Parque Güell",
        cidade: "Barcelona",
        quantidade: 1,
        preco: 75.00
    },
    {
        nome: "Museu do Prado",
        cidade: "Madrid",
        quantidade: 1,
        preco: 90.00
    },
    {
        nome: "Catedral de Sevilha",
        cidade: "Sevilha",
        quantidade: 1,
        preco: 70.00
    },
    {
        nome: "Cidade das Artes e Ciências",
        cidade: "Valência",
        quantidade: 2,
        preco: 100.00
    },
    {
        nome: "Praia de Barceloneta",
        cidade: "Barcelona",
        quantidade: 1,
        preco: 0.00
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let destino of destinos) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${destino.nome}</td>
        <td>${destino.cidade}</td>
        <td>${destino.quantidade}</td>
        <td class="preco">${destino.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</td>
    `;

    corpoTabela.appendChild(linha);
}
