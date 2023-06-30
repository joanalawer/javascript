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


