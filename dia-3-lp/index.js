
let name = ""
let idade = 0
let altura = 0
let peso = 0


nome = prompt("qual seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))


let anoNasc = 0
anoNasc = 2024 - idade

let IMC = 0
imc = peso / (altura * altura)

 
console.log("olá," + nome + ", voce tem:" + idade + "anos, nasceu em:" + anoNasc + ", tem:" + altura + "de altura, pesa:" + peso + "Kg e seu IMC é:" + imc + "Kg/m²")