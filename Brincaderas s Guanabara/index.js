// console.log('Hello, World!!')

// Váriaveis
var username = "Rodriguinho" //nn se usa, pq é global e pd quebra td
let age = 12
const email = "rodrigor.filho13@gmail.com"
console.log(username, age, email)
username = 'Ian'
age = 23 + 1
// email = "" Da erro, pd nn
console.log(username, age, email)

// Estrutura de dados: String, number, boolean, object and array 
let active = true
const user = {
    name: "Rodrigo",
    age: 12 + 0.9,
}

function getRandomNumber() {
    return Math.floor(Math.random() * 1000)
}

const peoples = [
    { name: "Caio", age: 15, money: getRandomNumber() },
    { name: "Rodrigo", age: 12, money: getRandomNumber() },
    { name: "Ian", age: 23, money: getRandomNumber() },
]

console.log(active, user.name, peoples[1].money)

// If and functions
if (peoples[1].money >= 300) {
    console.log("comprar controle")
} else {
    console.log("Vai trabalhar")
}

function getTotalMoney(num1, num2) {

    return num1 + num2

}

const total = getTotalMoney(43, 44)

console.log(total)

