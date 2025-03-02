// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ["banana", "orange", "apple", "pear"];

// constSortedArray = stringArray.sort();
// constSortedArray = stringArray.sort((a, b) => a - b); // непрацює
constSortedArray = stringArray.toSorted((a, b) => a.localeCompare(b));
console.log(constSortedArray);
