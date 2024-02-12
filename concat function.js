// <!-- Write a JavaScript program that creates a simple JavaScript program that manipulates strings using various string methods.

// Input:-
// Str1 : Hello
// Str2 : World

// Expected Output:-
// Concatenated String: HelloWorld
// Index of 'World': 5

// Test Cases:-
// 1- The final output should be printed correctly-

// a- In the function name 'concatString' use the appropriate string method to concatenate string 'str1' and 'str2' and store the result in a  variable name 'concat'. 
// b- In the function name 'indexOfWorld' use the appropriate string method to find the index of the string "World" from the string which is stored in a variable name 'con'. Store this index in the variable name ' indexOfworld'.  -->

function concatString(str1 , str2){
    let concat = str1.concat(str2);
    return concat;
}

function indexOfWorld(str1 , str2) {
let con = str1.concat(str2);
let indexOfworld = con.indexOf("World");
return indexOfworld;
}
