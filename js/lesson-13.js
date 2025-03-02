//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// ##### Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
//

class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}, email: ${this.email}`;
  }
}

class Employee extends Person {
  constructor(person, salary, department) {
    super(person.name, person.age, person.gender, person.email);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}, email: ${this.email}, salary: ${this.salary}, department: ${this.department}`;
  }
}

const person = new Person("John", 25, "male", "johnsome@ukr.net");
console.log(person.getDetails());

const employee = new Employee(
  new Person("Jane", 30, "female", "jane.doe@example.com"),
  1000,
  "GoIT"
);
console.log(employee.getEmployeeDetails());

const employee1 = new Employee(person, 1000, "GoIT");
console.log(employee1.getEmployeeDetails());
