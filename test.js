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