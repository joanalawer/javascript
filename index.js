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
//  append an array by adding
myData.push([15, 16]);
console.log(myData);
// append array by removing
