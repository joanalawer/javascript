/* Acessing Nested Objects */
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
 };

 var gloveBoxContent = myStorage.car.inside["glove box"];

 console.log(gloveBoxContent)
