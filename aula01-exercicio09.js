const sum = (num1, num2) => num1 + num2
const subtr = (num1, num2) => num1 - num2
const mult = (num1, num2) => num1 * num2
const division = (num1, num2) => num1 / num2

const calculadoraFn = (num1, op, num2) => op(num1, num2)

console.log('soma: ', calculadoraFn(20, sum, 10))
console.log('subtração: ', calculadoraFn(20, subtr, 10))
console.log('multiplicação: ', calculadoraFn(20, mult, 10))
console.log('divisão', calculadoraFn(20, division, 10))