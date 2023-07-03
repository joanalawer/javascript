/*Iterate through an array with a for loop */
var myArray = [9, 10, 11, 12]; 

var myTotal = 0;
    
for (var i = 1; i < myArray.length; i++) {    
    myTotal += myArray[i];
}

console.log(myTotal);