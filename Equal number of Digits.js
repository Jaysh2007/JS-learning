// Develop a JavaScript function called commonDigits that accepts two positive integers, num1, and num2, as parameters. The function should determine whether the numbers have an equal number of digits or not. If they have an equal number of digits then store true in the answer else store false.

// Note

// Use Math.floor when dividing the number by 10 to ensure that it returns data type number.
// Expected Input
// num1 = 78574
// num2 = 78392
// Expected Output
// true
// Expected Input
// num1 = 74847
// num2 = 781
// Expected Output
// false
// Test Cases
// Make a function named commonDigits
// Take two numbers as arguments
// Count the number of digits in both the numbers
// Check if both the numbers have equal numbers of digits
// If they are equal return true else return false
// ,


function commonDigits( num1 = 0, num2 = 0){
    // let equalDigits = true;
    let count1 = 0;
    let count2 = 0;
    let tempnum1 = num1;
    let tempnum2 = num2 ;
    while(tempnum1 >0){
        tempnum1 = Math.floor(tempnum1/10);
        count1++;
    }
    while( tempnum2 >0){
        tempnum2 = Math.floor(tempnum2/10);
        count2++;
    }
    return count1 === count2;
    
}