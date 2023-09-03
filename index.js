// datatypes: undefined, null, boolean, string, symbol, number, object

// Declare a variable
var myName = "Joana"; //var is used within the whole program
let ourName = "JoanaLawer"; // used within the scope it has been declared
const pi = 3.14; // const variable can never change

console.log(pi); //console.log displays output of javascript program

/* *************************************************************************************************** */
a = a + 5; // same as a += 5; same for subtraction, multiplication and division
/* *************************************************************************************************** */

/* *************************************************************************************************** */

//  Escape character '\'
var str = "There is a \"double quote\" string in \"double quotes\"";
var str = 'There is a "double quote" string in "double quotes"';
/* *************************************************************************************************** */

// CODE OUTPUT
// \'   single quote
// \"   double quote
// \\   backslash
// \n   newline
// \r   carriage return
// \t   tab
// \b   backspace
// \f   form feed
/* *************************************************************************************************** */

/* *************************************************************************************************** */

// Length of a string
var firts_name = "Joana";
firts_name_length = firts_name.length;
console.log(firts_name_length);

firstLetterOfFirstname = firts_name[0];

var lastName = "Lawer";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);
/* *************************************************************************************************** */

//  String immutability
var str = "Jello World";
str = "Hello World";
/* *************************************************************************************************** */

/* *************************************************************************************************** */

//  Functions
function wordBlanks(noun, adjective, verb, adverb) {
    var sentence = "";
    sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";
    return sentence;
}

console.log(wordBlanks("red", "dog", "rans", "faster"));
/* *************************************************************************************************** */

/* *************************************************************************************************** */
// Arrays
var array = [50, 60, 70];
var myData = array[0];
console.log(myData);

array[1] = 45;
console.log(array);


var multiArray = [[1,2,3], [4,5,6], [7,8,9], [10,11,12], 13, 14];
var myData = multiArray[2][1];
console.log(myData);
//  append an array by adding element at the end of array
myData.push([15, 16]);
console.log(myData);

// append array by pop() : removes the last element in the array
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();

var myArray = [["John", 23], ["cat", 2]];
var removedFromOurArray = myArray.pop();
console.log(myArray);

// append array by shift() : removes the first element in the array
var ourArray = ["Stimpson", "J", "cat"];
var removedFromOurArray = ourArray.shift();

var myArray = [["John", 23], ["cat", 2]];
var removedFromOurArray = myArray.shift();
console.log(myArray);
 
// append array by unshift() : adding element at he beginning of the array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.shift();

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
ourArray.shift("Paul");

console.log(myArray);
/***********************************************************************************************************/

/***********************************************************************************************************/

// Global a d Local Scope and Functions
// variables defined outside the function block have global scope
// when global and local variables have the same name, the local variable takes precedence 
var myGlobal = 10;

function func1(){
    oopsGlobal = 5;  // placing var before oopsGLobal makes it a local function
}

function func2(){
    var output = "";        // this variable has local scope
    if (typeoof(myGlobal) != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeoof(oopsGlobal) != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

func1();
func2();

// Global & Local Scope Function
var outWear = "T-Shirt";

function myOutfit (){
    var outWear = "sweater"

    return outWear;
}

console.log(myOutfit());
console.log(outWear);

// Using return
function timesFive(num){
    return num * 5;
}
console.log(timesFive(10));
/***********************************************************************************************************/

/***********************************************************************************************************/
// QUEUES 
/* Remove first item of arrary and return item; 
Add new item to end of array ansd print new array */
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean values: true or false

//  Conditional Statements: if
function myTrueOrFalse(){
    if (true){
        return "Yes, It is true";
    }
    return "No, It is false";
}
console.log(myTrueOrFalse(false));
/************************************************************************************************************/

/***********************************************************************************************************/

// Comparion
/* Equality, Strict equality, not equal, strict in equality 
    greter than, less than, greater than or equal to, less than or equal to
    logival and, logical or*/
// ==, ===, !=, !==, <, >, <=, >=, &&, ||

// Else statement
function myElseStatement(val){
    var status = "";

    if (val < 18){
        status = "Too young";
    } else if (val > 50){
        status = "Too old";
    }
    else {
        status = "Just right";
    }
    return status;
}
console.log(myElseStatement(16)); 

// Chain else
function testChain(num){
    if (num < 5 ){
        return "Tiny";
    }else if (num < 10){
        return "Small";
    }else if (num < 15){
        return "Medium";
    }else if (num < 20){
        return "Large";
    }else {

    }
}
console.log(testChain(3))
/* ************************************************************************* */

/* GOLF CODE */
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, stroke){
    if (strokes == 1){
        return names[0]
    }
    else if (strokes <= par -2){
        return names[1]
    }
    else if (strokes <= par -1){
        return names[2]
    }
    else if (strokes <= par){
        return names[3]
    }
    else if (strokes <= par + 1){
        return names[4]
    }
    else if (strokes <= par +2){
        return names[5]
    }
    else if (strokes <= par +3){
        return names[6]
    }

    return "Change Me";
}

console.log(golfScore(5, 4));

/* ************************************************************************* */

/* ************************************************************************* */
/* SWITCH STATEMENTS */
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
    }

    return answer;
}
/* ************************************************************************* */

/* ************************************************************************* */
/*  COUNTING CARDS */
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));
/* ************************************************************************* */


/* ************************************************************************* */
/*  BUILD OBJECTS IN JAVASCRIPT */
var myList = {
    "Food": "Waakye",
    "Books": "Mystery",
    "Savings": $3000000,
    "Vacation": "Greece"
};
// myList is the object
// Food, Books, Savings, Vacation are called property
// Waakye, Mystery, $3000000, Greece are values

/* Accessing Object Properties with dot notation */
var foodValue = myList.Food;
var booksValue = myList.Books;
var savingsValue = myList.Savings;
var vacationValue = myList.Vacation;

/* Accessing Object Properties with bracket notation */
// This can be used always but mostly when the property has space in it
var myList = {
    "favourite food": "Waakye",
    "book genre": "Mystery",
    "account balance": $3000000,
    "vacation destination": "Greece"
};

var foodValue = myList["favourite food"];
var booksValue = myList["book genre"];
var savingsValue = myList["account balance"];
var vacationValue = myList["vacation destination"];

/* Accessing Object Properties with variables */
var gradeDict = {
    1: "Distinction",
    2: "Very Good",
    3: "Good",
    4: "Fair",
    5: "Pass",
    6: "Fail"
};

var bestGrade = 1;
var grade = gradeDict[bestGrade];
// Append a property using dot notation
// Add new property to object using dot or bracket notation
// Deleting a property: "delete ogject.property;"

// Lookup values
function phoneticLookup(val) {
    var result = "";
    var lookup =  {
       "adam": "Alpha",
       "boston": "Beta",
       "chicago": "Charlie",
       "denver": "Delta",
       "easy": "Echo",
       "florida": "Foxtrot"
    };
    result = lookup[val];

    return result;
}

console.log(phoneticLookup("chicago"));

/* Testing Objects for properties using hasOwnProperty() method */
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }
    else {
        return "Not Found";
    }
}

console.log(checkObj("gift"));

// Manipulating complex objects 
/* A javascript object is a way to store flexible data:
can store strings, arrays and even other objects.
*/
var myMusicCollection = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD", "8T", "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video"
        ],
        "gold": false
    }
]
/* ************************************************************************* */


/* ************************************************************************* */
/* Acessing Nested Objects */
 var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
 };

 var gloveBoxContent = myStorage.car.inside["glove box"];

 console.log(gloveBoxContent)

 /* Accessing Nested Objects */
 var myPlants = [
    {
        type: "flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
 ];
 
 var secondTree = myPlants[1].list[1]
console.log(secondTree);
/* ************************************************************************* */


/* ************************************************************************* */
/*ITERATE WITH WHILE LOOP*/
var myArray = [];   // declare an empty array list

var i = 0;          // declare and initialise a counter i to 0
while (i < 10) {    // set condition to 10
    myArray.push(i);// append list with initial counter 
    i++;            // increment count while value is less than 10
}

console.log(myArray); // display final list
/* ************************************************************************* */

// Nesting for loops
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product);
/* ************************************************************************* */

// Generate random fraction - Math.random()
// Generate random whole numbers - Math.floor(Math.random())

// Generate random whole numbers within a range - 
function randomRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum -minNum + 1)) + minNum;

}

var myRandom = randomRange(5, 15);

console.log(myRandom);

// parseInt() - takes a string and returns an integer: Eg.
function returnStringAsInteger(str) {
    return parseInt(str);
}

returnStringAsInteger("345");

// Using parseInt Function with a Radix
// (radix specifies the base of a number in a string)
// parseInt(str, 2) - specifies base two
/* ************************************************************************* */


/* ************************************************************************* */
/* Use the conditional (Ternary) Operator
    condition ? statement-if-true : statement-if-false;*/
function checkEqual(a, b) {
    if (a == b) {
        return true;
    }
    else {
        return false;
    }
}

checkEqual(1, 2);

// Ternary conversion
function checkEqual(a, b) {
    return s === b ? true : false;
}
checkEqual(1, 2);
/* ************************************************************************* */


/* ************************************************************************* */
 /* Use Multiple conditional (Ternary) Operator */
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));
/* ************************************************************************* */


/* ************************************************************************* */
// Difference between the var and let keywords
// let does not allow a variable to be decalred more than once, 
// but the variable can be assigned

// var catName = "Quincy";
// var quote;

// var catName = "Beau";

let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk(){
    "use strict";

    catName = "Oliver";
    quote = catName + "says Meow!";

}
catTalk();
/* Compare Scopes of the var and let keywords */
//  var variables are declared globally or within function.
// let variable are declared within a block
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();
/* ************************************************************************* */


/* ************************************************************************* */
// Declare a read-only variable with the const keyword
// const has all the features of let and is read-only; cannot be reassigned
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool";
    
    for(let i = 0; i < str.length; i+=2){
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");
/* ************************************************************************* */


/* ************************************************************************* */
//  Prevent object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI : 3.14
    };
    
    Object.freeze(MATH_CONSTANTS); //prevents value of varible from changing
     
    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
/* ************************************************************************* */


/* ************************************************************************* */
// Use arrow functions to write concise anonymous functions
var magic = function() {
    return new Date();
}; 
// this anonymous function can be written as:
const magic = () => new Date();
/* write arrow functions with parameters*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
/* Write higher order arrow functions */
// .filter, .map, .reduce
// whenever one function takes another function as argument, arrow function is used
const realNumberArray = [4, 5.5, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x );
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
/////////////////////////////////////////////////////////////////////////////////////
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));
/* ************************************************************************* */


/* ************************************************************************* */
/* Use the rest operator with function parameters
The rest operator(three dots) allows to create a function that takes a variable of three arguments  */
const sum = (function() {
    // return function sum(x, y, z) { 
    //     const args = [x, y, z];
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})(); 
console.log(sum(1, 2, 3));
/* ************************************************************************* */


/* ************************************************************************* */
/* Use spread operator to evaluate arrays in place */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = arr1;    // chnege line to arr2 = [...arr1]; to implement spread operator
    arr1[0] = 'potato'
})();

console.log(arr2);
/* ************************************************************************* */


/* ************************************************************************* */
/* Use destructuring assignment to assign variables from objects*/
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x:a, y:b, c:z} = voxel;

const AVG_TEMPERATURE = {
    today: 77.5, tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const tempOfTomorrow = undefined;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURE));
