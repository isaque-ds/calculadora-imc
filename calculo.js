// Função para calcular o IMC
$('.calcular').click(function () {
    // Obtendo elementos do DOM
    const pesoElement = document.getElementById('peso');
    const alturaElement = document.getElementById('altura');
    const respostaElement = document.getElementById('resposta');

    // Convertendo valores para números
    const peso = Number(pesoElement.value);
    const altura = Number(alturaElement.value);

    // Calculando o IMC
    const imc = (peso / (altura * altura)).toFixed(2);

    // Validação dos campos
    if (!peso || !altura) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Configuração base da resposta
    $('#resposta').css('display', 'flex');

    // Definindo as categorias de IMC
    if (imc <= 18.5) {
        exibirResultado('blue', imc, 'abaixo do peso', 'abaixo-do-peso.jpg');
    } else if (imc <= 24.9) {
        exibirResultado('green', imc, 'com o peso ideal', 'peso-normal.jpg');
    } else if (imc <= 29.9) {
        exibirResultado('yellow', imc, 'acima do peso', 'acima-do-peso.jpg');
    } else if (imc <= 39.9) {
        exibirResultado('orange', imc, 'com Obesidade grau 1', 'obesidade-grau1.jpg');
    } else {
        exibirResultado('red', imc, 'com Obesidade grau 2', 'obesidade-grau2.jpg');
    }
});

// Função auxiliar para exibir o resultado
function exibirResultado(cor, imc, mensagem, imagem) {
    $('#resposta')
        .css('color', cor)
        .html(`Seu IMC é ${imc}, você está ${mensagem}!`)
        .prepend(`<img src="img/${imagem}" width="60px">`);
}

// Função para limpar os campos
$('.limpar').click(function () {
    $("#peso, #altura").val("");
    $('#resposta').css('display', 'none');
});