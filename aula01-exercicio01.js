const primos = [2, 3, 5, 7, 11]
const somatorio = primos.reduce(somaVetor = (total, actual) => total + actual)

console.log(primos)
console.log('Somatória dos valores no vetor:', somatorio)