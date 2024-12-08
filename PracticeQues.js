// // QUes1: Get yser to input a number using prompt("Enter a number: "). Check if the number is multiple of 5.

// let num = prompt("Enter the number: ");

// if(num%5 === 0) {
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
// };


// // Que2: WAP swhich can give grades to students according to their scores.

// let mark = prompt("Enter mark: ");

// if(mark >= 90) {
//     console.log("Gade of Student is A");
// } else if(mark >= 80 && mark < 90) {
//     console.log("Gade of Student is B");
// }else if(mark >= 70 && mark < 90) {
//     console.log("Gade of Student is C");
// }else if(mark >= 60&& mark < 90) {
//     console.log("Gade of Student is D");
// }else if(mark >= 50 && mark < 90) {
//     console.log("Gade of Student is E");
// }else {
//     console.log("Student is Fail");
// };


// // Ques3: Print all even number from 0 to 100

// let number = prompt("ENTER NUMBER: ");

// for(let i = 1; i<=number; i++) {
//     if(i % 2 === 0) {
//         console.log("num = ",i);
//     }
// };


// /*  
//     Ques4: Create a game whwere you start with any random game number. 
//     Ask the user to keep guessing the game number until the user enters correct value
// */

// let key = 25;
// let guess = prompt("Enter any number: ");

// while(guess != key) {
//     guess = prompt("Your Guess is wrong. Try again");
// };
// console.log("Congratulations, your guess is correct");


// /* 
//     Ques5: Prompt the user to enter their full name. Generate a username for them based on the input.
//     Start username with @.followed by their full name and ending with fullname Length.

//     eg. user name = "tushardharmik", username should be "@tushardharmik".
// */

let fullName = prompt("Enter your full name without space: ");
let username = "@" + fullName + fullName.length;
console.log("Username based on Entered Name is : ", username);