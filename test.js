// Global Scope and Functions
// variables defined outside the function block have global scope
var myGlobal = 10;

function func1(){
    oopsGlobal = 5;
}

function func2(){
    var output = "";
    if (typeof(myGlobal) != "undefined") {
        output += "myGlobal: " + myGlobal + "\n";
    }
    if (typeof(oopsGlobal) != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

func1(); 
func2();