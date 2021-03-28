var inputNumero = document.querySelector(".input-numero")
var numero
var c
var acertou
function registrarNumero() {
    var instrucao = document.querySelector(".instrucao")
    if (inputNumero.value == 1)
    {
        numero = parseInt(25 * Math.random())
        instrucao.innerHTML = "Agora acerte qual número foi escolhido entre 0 e 25."
    } else if (inputNumero.value == 2)
    {
        numero = parseInt(50 * Math.random())
        instrucao.innerHTML = "Agora acerte qual número foi escolhido entre 0 e 50."
    } else if (inputNumero.value == 3)
    {
        numero = parseInt(100 * Math.random())
        instrucao.innerHTML = "Agora acerte qual número foi escolhido entre 0 e 100."
    } else {
        alert("Você digitou um número inválido, por favor digite outro.")
        inputNumero.value = ''
        inputNumero.focus()
        instrucao.innerHTML = ""
    }
    c = 1;
    console.log("O número escolhido foi " + numero)
    acertou = false
    for(var i = 1; i<=5; i++)
    {
        var chute = document.querySelector(".chute" + c)
        var informacao = document.querySelector("#chute" + c)
        chute.value = ''
        informacao.innerHTML = ''
    }
}

function registrarChute() {
    var chute = document.querySelector(".chute" + c)
    var informacao = document.querySelector("#chute" + c)
    if (acertou) {
        alert("Você já acertou, por favor recarregue a página ou registre a dificuldade novamente para jogar de novo!")
    } else {
        if (chute.value == numero)
        {
            informacao.innerHTML = "Parabéns, você acertou o número!"
            acertou = true
        } else if (chute.value > numero)
        {
            informacao.innerHTML = "Poxa, você errou :( e lá se foi a sua " + c + "ª tentativa. Tente chutar um número menor."
        } else if (chute.value < numero)
        {
            informacao.innerHTML = "Poxa, você errou :( e lá se foi a sua " + c + "ª tentativa. Tente chutar um número maior."
        }
        c++
    }
}