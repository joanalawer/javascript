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

var secondTree = myPlants[0].list[2];
console.log(secondTree);