// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
    let count = 1;
    while (num >= count) {
        !(count % 3) && !(count % 5) && console.log("fizzbuzz");
        !(count % 5) && console.log("buzz");
        !(count++ % 3) && console.log("fizz");
    } 
    return 
}

fizzBuzz(15);