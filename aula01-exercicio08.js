const calculadora = (num1, op, num2) => {
  const ops = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2
  }
  return ops[op](num1, num2)

  /*if (operator === '+') {
    return sum(num1, num2)
  } else if (operator === '-') {
    return subt(num1, num2)
  } else if (operator === '*') {
    return mult(num1, num2)
  } else if (operator === '/') {
    return divi(num1, num2)
  }*/
}

console.log('Números: 9 e 3')
console.log('Soma: ', calculadora(9, '+', 3))
console.log('Subtração: ', calculadora(9, '-', 3))
console.log('Multiplicação: ', calculadora(9, '*', 3))
console.log('Divisão: ', calculadora(9, '/', 3))