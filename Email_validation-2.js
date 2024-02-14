// You have already completed the email validation program using "||" operator. Now modify the code and rewrite the conditions to validate the email using the "&&" operator.

// Additionally, include one more condition that:

// a- Email should have at least 3 characters before “@.”
// b-If the email is valid then store the value of email in the result variable with a  message.
// Expected Input
//  xyz@gmail.com
// Expected Output
// xyz@gmail.com 
// Expected Input
//  xz@gmail.com is valid
// Expected Output
// invalid email
// Test Cases
// Dot should be there before the alphabet

// Check for Valid email

// Check for invalid email

// Check for the size of the email

// Check for @ symbol

// Check for the length after the dot


function main(email){
    let result;
    //write your program here to verify the email
    let atIndex = email.indexOf("@");
    let charactersBeforeAt = atIndex >= 3;

    // Condition b: If the email is valid, store the value of email in the result variable with a message
    // Condition c: Length of the email > 11
    // Condition d: After "." only 2 or 3 characters allowed
    let dotIndex = email.lastIndexOf(".");
    let charactersAfterDot = email.length - dotIndex - 1;
    let isValidEmail = charactersBeforeAt && charactersAfterDot >= 2 && charactersAfterDot <= 3 && email.length > 11;

    // Condition e: Minimum 3 characters between @ and .
    let charactersBetweenAtAndDot = dotIndex - atIndex > 3;

    if (isValidEmail && charactersBetweenAtAndDot) {
        result = email + " is valid";
    } else {
        result = "Invalid email";
    }
    
    //assign your final ans in result;
    return result;
}