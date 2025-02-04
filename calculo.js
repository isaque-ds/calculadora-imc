$('.calcular').click(function () {

    var pes = document.getElementById('peso')
    var altur = document.getElementById('altura')
    var resp = document.getElementById('resposta')
    var p = Number(pes.value)
    var alt = Number(altur.value)
    var totimc = p / (alt * alt)
    var imc = totimc.toFixed(2)

    if (p == "" || alt == "") {
        alert('preencha todos os campos!')
    } else {
        if (imc <= 18.5) {
            $('#resposta').css('display', 'flex');
            $('#resposta').css('color', 'blue');
            $('#resposta').html('Seu IMC é ' + imc + ', você está abaixo do peso!');
            $('#resposta').prepend('<img src="img/abaixo-do-peso.jpg" width="60px">');
        } if (imc >= 18.6 && imc <= 24.9) {
            $('#resposta').css('display', 'flex');
            $('#resposta').css('color', 'green');
            $('#resposta').html('Seu IMC é ' + imc + ', você está com o peso ideal!');
            $('#resposta').prepend('<img src="img/peso-normal.jpg" width="60px">');
        } if (imc >= 25 && imc <= 29.9) {
            $('#resposta').css('display', 'flex');
            $('#resposta').css('color', 'yellow');
            $('#resposta').html('Seu IMC é ' + imc + ', você está acima do peso!');
            $('#resposta').prepend('<img src="img/acima-do-peso.jpg" width="60px">');
        } if (imc >= 30 && imc <= 39.9) {
            $('#resposta').css('display', 'flex');
            $('#resposta').css('color', 'orange');
            $('#resposta').html('Seu IMC é ' + imc + ', você está com Obesidade grau 1!');
            $('#resposta').prepend('<img src="img/obesidade-grau1.jpg" width="60px">');
        } if (imc > 40) {
            $('#resposta').css('display', 'flex');
            $('#resposta').css('color', 'red');
            $('#resposta').html('Seu IMC é ' + imc + ', você está com Obesidade grau 2!');
            $('#resposta').prepend('<img src="img/obesidade-grau2.jpg" width="60px">');
        }
    }

})

$('.limpar').click(function () {
    $("#peso").val("")

    $("#altura").val("")

    $('#resposta').css('display', 'none')
})