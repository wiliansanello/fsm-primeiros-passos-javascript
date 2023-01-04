const vetor = [5, 9, 18, 27, 36, 5, 27, 36]
const filtElem = (agg, actual) => {
  if (!agg[actual]) {
    agg[actual] = {
      value: actual,
      occur: 0
    }
  }
  agg[actual].occur++

  return agg
}

const countElem = vetor.reduce(filtElem, {})
const keys = Object.keys(countElem)
const unique = keys.filter(key => countElem[key].occur === 1)
const uniqueValues = unique.map(val => countElem[val].value)
console.log('Contagem de elementos: ', countElem)
console.log('Chaves do objeto: ', keys)
console.log('Objeto filtrado: ', unique)
console.log('Valores originais: ', uniqueValues)


