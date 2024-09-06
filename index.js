let nome = prompt(`Olá! Bem vindo ao website da Abobora Inteligente. Qual o seu nome?`)
    alert('Olá ' + nome + ' você entrou no website da abobora inteligente!') //Concatenação (+)
    document.write(`Olá ${nome}, Seu nome tem ${nome.length} letras<br>`)

let num1 = Number(prompt('Digite um numero:'))
let num2 = Number(prompt('Digite outro numero:'))
const soma = num1 + num2
    document.write(`O resultado da soma foi ${String(soma)}`) //Conversão de tipo ${String()}

