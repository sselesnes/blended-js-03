// Створи клас для калькулятора, який має такі методи:
// - метод num, який набуває початкового значення для наступних операцій
// - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
// - методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

class Calculator {
  constructor() {
    this.num = 0;
  }
  number(value) {
    this.num = value;
  }
  getResult() {
    return this.num;
  }

  add(num) {
    this.num += num;
  }
  substract(num) {
    this.num -= num;
  }
  divide(num) {
    this.num /= num;
  }
  multiply(num) {
    this.num *= num;
  }
}

const calc = new Calculator();
calc.number(5);
calc.add(6);
console.log(calc.getResult());

//
class Calculator2 {
  constructor() {
    this.num = 0;
  }
  number(value) {
    this.num = value;
  }
  getResult() {
    return this.num;
  }

  add(num) {
    this.num += num;
    return this;
  }
  substract(num) {
    this.num -= num;
    return this;
  }
  divide(num) {
    this.num /= !num ? 1 : num;
    return this;
  }
  multiply(num) {
    this.num *= num;
    return this;
  }
}

const calc2 = new Calculator2();
calc2.divide(2).multiply(2).add(3).substract(1);
console.log(calc2.getResult());
calc2.divide(0);
console.log(calc2.getResult());
