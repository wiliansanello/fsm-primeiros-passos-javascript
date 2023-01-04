const vetor = [20, 31, 39, 50, 55, 82]
const showOdds = vetor.filter(item => item % 2 !== 0)

console.log('Vetor original: ', vetor)
console.log('Vetor filtrado: ', showOdds)