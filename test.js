function multipleCaseInput(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Good";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Better";
            break;
        case 7:
        case 8:
        case 9:
            answer = "Best";
            break;
        default:
            answer = "Grade";
            break;
    }

    return answer;
}

console.log(multipleCaseInput(0));