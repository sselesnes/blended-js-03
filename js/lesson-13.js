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
    return { name: this.name, age: this.age, gender: this.gender, email: this.email };
  }
}

class Employee extends Person {
  constructor(person, salary, department) {
    super(person.name, person.age, person.gender, person.email);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
      salary: this.salary,
      department: this.department,
    };
  }
}

const person = new Person("John", 25, "male", "johnsome@ukr.net");
console.table(person.getDetails());

const employee = new Employee(
  new Person("Jane", 30, "female", "jane.doe@example.com"),
  1000,
  "GoIT"
);
console.table(employee.getEmployeeDetails());

const employee1 = new Employee(person, 1000, "GoIT");
console.table(employee1.getEmployeeDetails());

//
class Person0 {
  constructor(age, email, gender, name) {
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.name = name;
  }
  getDetails() {
    return { name: this.name, age: this.age, gender: this.gender, email: this.email };
  }
}
class Employee0 extends Person0 {
  constructor(age, email, gender, name, salary, department) {
    super(age, email, gender, name);
    this.salary = salary;
    this.department = department;
  }
  getEmployeeDetails() {
    return { ...this.getDetails(), salary: this.salary, department: this.department };
  }
}
const employee0 = new Employee0(21, "foo@gmail.com", "male", "Frank", 1500, "SalesDep");
console.table(employee0.getEmployeeDetails());
