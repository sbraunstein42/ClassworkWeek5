// ================================
// JavaScript Array Challenges
// ================================

// -----------------------------------------------

// Challenge 1: Access an Array Item
// Create an array called "fruits" with at least 4 fruit names.
// Log the first item to the console.

var fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[0]); // apple

// -----------------------------------------------

// Challenge 2: Change an Array Item
// Using the "fruits" array, change the second fruit to something new.
// Log the array to confirm the change.

fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry", "date"]

// -----------------------------------------------

// Challenge 3: Add an Item to an Array
// Add a new fruit to the end of the "fruits" array using push().
// Log the array to confirm it was added.

fruits.push("elderberry");
console.log(fruits); // ["apple", "blueberry", "cherry", "date", "elderberry"]

// -----------------------------------------------

// Challenge 4: 2D Array Access
// Create a 2D array called "matrix" that is 2x2.
// Fill it with numbers of your choice.
// Log the number in the first row, second column.

var matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[0][1]); // 2

// -----------------------------------------------

// Challenge 5: Parallel Arrays
// Create two arrays: "names" and "ages".
// Put 3 items in each so that the indices match (example: names[0] is  "Alice", ages[0] is 10).
// Log a sentence using the first index like: "Alice is 10 years old."

var names = ["Alice", "Bob", "Charlie"];
var ages = [10, 12, 14];
console.log(names[0] + " is " + ages[0] + " years old."); // Alice is 10 years old.

// -----------------------------------------------

// Challenge 6: Sum All Numbers in a 2D Array
// Create a 2D array called "numbers" with at least 3 rows and 3 columns filled with numbers.
// Use a loop to calculate the sum of all numbers in the array.
// Log the total sum to the console.

var numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var totalSum = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    totalSum += numbers[i][j];
  }
}
console.log(totalSum); // 45
