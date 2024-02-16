// Write a javascript program to check if a number is composite or not. A composite number is a natural number or a positive integer that has more than two factors.

// Expected Input
// 20
// Expected Output
// true
// Expected Input
// 13
// Expected Output
// false
// Test cases
// a-If the number is composite store true in the answer
// b-If the number is not composite store false in the answer


function Composite(number) {
    let answer;
   //Write your code here
      if (number > 1) {
          for (let i = 2; i <= (number/2); i++) {
              if (number % i === 0) {
                  answer = true;
                  break;
              } else {
                  answer = false;
              }
          }
      } else {
          answer = false;
      }
  return answer;
  }