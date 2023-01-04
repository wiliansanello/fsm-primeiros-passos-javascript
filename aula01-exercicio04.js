const vetor = [5, 10, 15, 15, 25, 5, 15, 40, 15]

const countElem = (agg, actual) => {
  if (!agg[actual]) {
    agg[actual] = 0
  }
  agg[actual]++
  return agg
}

const totals = vetor.reduce(countElem, {})
