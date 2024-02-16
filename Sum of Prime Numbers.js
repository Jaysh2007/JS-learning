// You have been given a task to print the sum of all prime numbers between 1 to n where n is the uppper limit. Write a javascript program that store the sum of prime numbers between 1 to n in the variable answer.

// Expected Input
// 50
// Expected Output
// 328
// Test Cases
// a-Find all prime numbers between 1 to n
// b-Calculate the sum of all the prime numbers
// c- Store the result in answer


function sumOfPrimeNumbers(limit) {
    let answer = 0;
   //Write your code below
      for(let p=2; p<=limit;p++){
          let isPrime = true;
      for(let i = 2;i<=Math.sqrt(p);i++){
          if(p%i===0){
              isPrime = false;
              break;
          }
      }
          if(isPrime){
              answer +=p;
          }
      }
    return answer
  }