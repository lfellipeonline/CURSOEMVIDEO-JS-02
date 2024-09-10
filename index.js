document.addEventListener('DOMContentLoaded', function() {
//Atributos da exibição das enquetes
    let nomeexibição = document.getElementById('nome')
    const letras = document.getElementById('letras')
    const easteregg = document.getElementById('easteregg')
    const calculo = document.getElementById('calculo')
    const tamanhocalculo = document.getElementById('tamanhocalculo')
    
    nomeexibição.innerText = (`Olá ${nome}.`)
    letras.innerText = (`Seu nome tem ${nome.length} letras.`)
    calculo.innerText = (`O resultado da soma foi ${String(soma)}.`)

    if (nomereplace == 'abobora') {
        easteregg.innerText = (`VOCÊ É UM DE NÓS!`)
    } 

    if (soma > 100000) {
        tamanhocalculo.innerText = 'QUE NÚMERO GRANDE!'
    }

    if (soma >= Infinity){
        window.alert('O resultado da soma é invalido!')
        window.location.reload()
    }
})

//Atributos do nome
let nome = prompt(`Olá! Bem vindo ao website da Abobora Inteligente. Qual o seu nome?`)
let nomereplace = nome.toLowerCase().replace('abóbora', 'abobora') //Substituição de caracter
if (nome == '') {
    alert('Você não digitou um nome! Por favor, atualize a página.')
    window.location.reload()
}   alert('Olá ' + nome + ' você entrou no website da abobora inteligente!') //Concatenação (+)

//Atributos dos números    
let num1 = Number(prompt('Digite um numero:').replace(',', '.'))
let num2 = Number(prompt('Digite outro numero:').replace(',', '.'))
if (num1 == '' && num2 == '') {
    alert('Você não digitou um número! Por favor, atualize a página.')
    window.location.reload()
}
const soma = num1 + num2
if (Number.isNaN(soma)) {
    window.alert('Você não digitou um número! Por favor, atualize a página.')
    window.location.reload()
}

//Atributos do website (Os atributos abaixo são temporários até eu pensar no que fazer com esse botao)
function clicar() {
    //alert('Você clicou no botão! (MAIS EM BREVE!)')
    window.location.reload(true)
}

//Exibição no console  
console.log('Valor interno de nomereplace:', nomereplace)