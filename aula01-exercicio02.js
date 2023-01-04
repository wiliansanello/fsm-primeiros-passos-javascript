const vetor = [1, 3, 8, 12, 15, 19, 22, 26, 32]
const soma = (total, actual) => total + actual
const filtraPares = item => item % 2 === 0
const soPares = vetor.filter(filtraPares)
const somadora = vetor.filter(filtraPares).reduce(soma)

console.log('Vetor filtrado: ', soPares)
console.log('Soma numeros pares: ', somadora)