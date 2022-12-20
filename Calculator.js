class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if(b === 0){
        return 'Error';
      } else {
        return a / b;
      }
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  module.exports = Calculator;