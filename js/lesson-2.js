// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

const min = Math.floor(Math.random() * (59 - 0) + 0);


//
// example 1
//
// let message, calc;
// calc = Math.floor(min / 15);
// if (calc >= 3) {
//   message = `${min} потрапляє у четверту чверть години`;
// } else if (calc >= 2) {
//   message = `${min} потрапляє у третю чверть години`;
// } else if (calc >= 1) {
//   message = `${min} потрапляє у другу чверть години`;
// } else {
//   message = `${min} потрапляє в першу чверть години`;
// }

//
// example 2
//
let dict = ["першу", "другу", "третю", "четверту"];
let result = Math.floor(min / 15);
let message = `${min} потрапляє у ${dict[result]} чверть години`;

alert(message);
