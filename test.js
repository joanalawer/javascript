// Else statement
function myElseStatement(val){
    var status = "";

    if (val < 18){
        status = "Too young";
    } else {
        status = "Too old";
    }
    return status;
}

console.log(myElseStatement(57));