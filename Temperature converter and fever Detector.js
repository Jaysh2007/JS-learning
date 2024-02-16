// Create a program that determines if a patient has a fever based on their body temperature reading.

// Test Cases:-

// There should be a correctly defined temperature function.

// a- Apply the required conversion formula to convert the tempF value in Fahrenheit to Celsius and store the result in a new variable. 

// b- Then apply the if condition to check whether the converted value is greater than or equal to 37. 

// c- If the value is greater than or equal to 37 then in "result" it should store that "you have got a fever" with the temperature value converted to one decimal place.

// d- If the value is less than 37 then in "result" it should store that "you don't have a fever" with the temperature value converted to one decimal place.
// Hints:-

// To round the converted temperature to one decimal place using the toFixed() method.

// ;


function main(tempF) {
    let result;
  
    // write your code here
      let celcius = (tempF-32)/1.8;
      
      if(celcius>=37){
          result = "you have got a fever"+" "+ celcius.toFixed(1);
      }else{
          result = "you dont have a fever"+" "+ celcius.toFixed(1);
      }
  
    return result;
  }
  