function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "Azul";
            break;
        case "b":
            answer = "Beryl";
            break;
        case "c":
            answer = "Cobalt";
            break;
        case "e":
            answer = "Emerald";
            break;
        default:
            answer = "Gem";
            break;

    }

    return answer;
}

console.log(switchOfStuff(5));