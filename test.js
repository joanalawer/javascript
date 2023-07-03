// Generate random whole numbers within a range - 
function randomRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum -minNum + 1)) + minNum;

}

var myRandom = randomRange(5, 15);

console.log(myRandom);