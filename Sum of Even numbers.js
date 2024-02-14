// You are tasked with creating a program that calculates the sum of even numbers up to a given limit. Write a JavaScript function using a for loop that takes a positive integer as input and returns the sum of all even numbers from 1 up to that integer.

// Expected Input
// 6
// Expected Output
// 12
// Test Cases
// Use a for loop to iterate from 1 up to the given integer.
// Calculate and return the sum of all even numbers encountered during the loop.
// =


function sumOfEvenNumbers(limit) {

    let result = 0;
    for(let i=limit;i>0;i-=2){
        result= result +i;
    }
    return result;
  }