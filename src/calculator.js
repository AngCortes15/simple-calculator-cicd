class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('División por cero no permitida');
    }
    return a / b;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

module.exports = Calculator;

if (require.main === module) {
  const calc = new Calculator();
  console.log('Calculadora iniciada');
  console.log('2 + 3 =', calc.add(2, 3));
  console.log('10 - 4 =', calc.subtract(10, 4));
  console.log('5 * 6 =', calc.multiply(5, 6));
  console.log('15 / 3 =', calc.divide(15, 3));
}