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