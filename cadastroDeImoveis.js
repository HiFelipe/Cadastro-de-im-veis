const imoveis = [];
let opcao = "";

do {
    opcao = Number(prompt(
        `Bem-vindo(a) ao Cadastro de Imóveis!`+
        `\nTotal de Imóveis: ${imoveis.length}`+
        `\nEscolha uma opção:\n1. Novo imóvel\n2. Lista de imóveis\n3. Sair`
    ));

    switch (opcao) {
        case 1:
            const imovel = {};

            imovel.proprietario = prompt("Informar o nome do proprietário do imóvel:");
            imovel.quartos = prompt("Quantos quartos o imóvel possui?");
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

            const confirmacao = confirm(
                `Salvar este imóvel?`+
                `\nProprietário: ${imovel.proprietario}`+
                `\nQuartos: ${imovel.quartos}`+
                `\nBanheiros: ${imovel.banheiros}`+
                `\nPossui garagem? ${imovel.garagem}`
            );

            if (confirmacao) {
                imoveis.push(imovel);
                alert("Imóvel salvo com sucesso!");
            } else {
                alert("Voltando ao menu.");
            }

            break;
        case 2:
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    `Imóvel ${i + 1}`+
                    `\nProprietário: ${imoveis[i].proprietario}`+
                    `\nQuartos: ${imoveis[i].quartos}`+
                    `\nBanheiros: ${imoveis[i].banheiros}`+
                    `\nPossui garagem? ${imoveis[i].garagem}`
                );
            }
            break;
        default:
            break;
    }
} while (opcao !== 3);

alert("Saindo...");
