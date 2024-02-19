// You have been provided with an array your task is to find all the duplicate elements and return them in form of an array

// Expected Input
//  [12,43,64,45,35,12,68,12]
// Expected Output
// [12]
// Test Cases
// Find the element that has more than one occurrence
// Store the new elements in a new array
// Return the new array

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){

    let arr1 = [];
    for(let i=0; i<arr.length-1;i++){
        for(let  j = i+1 ; j<arr.length;j++){
            if(arr[i]===arr[j] && !arr1.includes(arr[i])){
                arr1.push(arr[i]);
            }
        }
            }
return arr1;
}    
console.log(findDuplicate(arr));