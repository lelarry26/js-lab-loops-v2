//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, 
  you’ll need to convert the input:
*/


//1. Repeat the following phrase 5 times to your terminal by using a `for loop`.
//"Repetition is a good thing"

// for (let i=0; i < 5; i++) {
//   console.log("Repetition is a good thing")
// }

//2. Solve the problem above again using a `while loop`.
// let count = 0;

// while (count < 5){
//   count = count + 1;
//   console.log("Repetition is a good thing");
// }

//3. Write a `for loop` that prints the numbers from 1 to 10 to the console.
// for (let i=1; i < 11; i++){

//   console.log(i)
// }

//4. Write a `while loop` that prints the numbers from 1 to 10 to the console.
// let count = 0
// while (count < 10){
//   count = count + 1;
//   console.log (count)
// }

//5. Write a `for loop` that prints the even numbers from 1 to 20 to the console.
// for (let i=1; i < 21; i++){
//   if (i % 2 === 0)
//     console.log(i)
// }

//6. Write a `while loop` that prints the even numbers from 1 to 20 to the console.
// let i = 0
// while (i < 20){
//   i = i + 1
//     if (i % 2 == 0)
//     console.log (i)
// }

//7. Write a `for loop` to print the numbers 0 - 20
// for (let i=0; i < 20; i++){

//   console.log(i)
// }

//8. Write a `while loop` to print the numbers 0 - 20
// let count = -1
// while (count < 20){
//   count = count + 1
//   console.log (count)
// }

//9. Write a `for loop` that prints the numbers from 10 to 1 to the console.
// for (let i=10; i > 0; i--){
//   console.log (i)
// }

//10. Write a `while loop` that prints the numbers from 10 to 1 to the console.
// let count = 11
// while (count > 1) {
//   count = count - 1
//   console.log (count)
// }

//11. Write a `while loop` that keeps asking a user to enter in a word.  The program loop should stop when the user enters the workd `exit`
// let ask = prompt ("Enter in a word") 
// while ( ask !== "exit"){
// ask = prompt ("Enter in a word")
// console.log (ask)
// }
//Is this correct?

//12. Print only the ODD values from 3 - 29, one number per line
//for loop variant-----------------------------------------------
// for (let i=3; i <= 29; i++){
//   if (i % 2 !== 0)
//   console.log(i)
// }
//Is there a better way?
//while loop variant---------------------------------------------
// let i = 1
// while (i < 29) {
//   i = i + 1
//     if (i % 2 !== 0)
//     console.log(i)
// }
//Is there a better way?

//13. Print the EVEN numbers 12 down to -14 in descending order, one number per line
//for loop variant------------------------------------------------
// for (let i=12; i >= -14; i--){
//   if (i % 2 == 0)
//   console.log(i)
// }
//Is there a better way?
//while loop variant---------------------------------------------
// let i = 13
// while (i  > -14) {
//   i = i - 1
//     if (i % 2 == 0)
//       console.log(i)
// }
//Is there a better way?

//14. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3
//for loop variant------------------------------------------------
// for (let i = 50; i > 20; i--){
//   if (i % 3 ==0)
//   console.log(i)
// }
//Is there a better way?
//while loop variant---------------------------------------------
// let i = 50
// while (i >= 20){
//   i = i - 1
//   if (i % 3 == 0)
//   console.log(i)
// }
//Is there a better way?

//15. Write a loop that calculates the sum of the numbers from 1 to 100 and prints the result 
//to the console.
//for loop variant------------------------------------------------
// total = 0
// for (let i = 1; i < 101; i++)
//   if (i !== 101){
//     total = (total + i)
// console.log (total)
// }
//How do I get to the result without the other values printed?
//while loop variant---------------------------------------------
// let i = 0
// total =  0
//   while (i <= 100){
//     i = i + 1
//     if (i !== 101)
//       total = (total + i)
//       console.log (total)
//   }
//How do I get to the result without the other values printed?


