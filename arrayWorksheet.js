//Part 1

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]);

console.log(fruits.length);

//Part 2

fruits.push("orange");

console.log(fruits);

let removedFruit = fruits.pop();

console.log(fruits);
console.log(removedFruit);

fruits.push("mango"); 
fruits.push("kiwi");

let lastRemoved = fruits.pop();

console.log(fruits);
console.log(fruits.length);

//Part 3

for(let fruit = 0; fruit < fruits.length; fruit++) {
    console.log(fruits[fruit]);
}

for(let fruit = 0; fruit < fruits.length; fruit++) {
    console.log(fruits[fruit].toUpperCase());
}

let count = 0;

for(let fruit = 0; fruit < fruits.length; fruit++) {
    if (fruits[fruit] === "apple") {
        count++;
    }
}

console.log(count);

//Part 4

let cart = [];

cart.push("chicken");
cart.push("salad");
cart.push("bacon");

console.log(cart);

let lastItem = cart.pop();

console.log(cart);
console.log(cart.length);

let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let number = numbers.length - 1; number >= 0; number--) {
    reversed.push(numbers[number]);
}

console.log(reversed);

//Part 5

let array1 = ["a", "b", "c", "d"];
let array2 = ["red", "green", "blue"];

if (array1.length > array2.length) {
    console.log("array1 has a greater length");
} else {
    console.log("array2 has a greater length");
} 

//Part 6

const array = [10, 20, 30, 40, 50, 60];

for (i = 0; i < array.length; i+= 2) {
    console.log(array[i]);
}

//Part 7

let students = ["Alice", "Bob", "Charlie"];
let subjects = ["Math", "Science"];

for (let student = 0; student < students.length; student++) {
    for (let subject = 0; subject < subjects.length; subject++) {
        console.log(`${students[student]} - ${subjects[subject]}`);
    }
}

//In a nested for loop, the outer loops runs first. For each turn of the outer loops, the inner loops runs completely from start to finish. It's good for pairing elements from two arrays like in this example. It picks one student at a time using the outer loop. Then it pairs 1 student with every subject as the inner loops run fully. Only after the inner loop finishes does the outer loops go to the next student.