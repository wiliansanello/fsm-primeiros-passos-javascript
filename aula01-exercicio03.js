const valores = [2, 4, 5, 9, 12, 15, 18, 19]
const filtraImpares = item => item % 2 !== 0
const soImpares = valores.filter(filtraImpares)
const soma = (a, b) => a + b
const somaImpares = soImpares.reduce(soma)

console.log('vetor: ', valores)
console.log('vetor filtrado: ', soImpares)
console.log('soma valores ímpares: ', somaImpares)