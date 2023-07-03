// Setup
var contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"]
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"]
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["Javascript", "Gaming", "Foxes"]
    },
];

// Setup function
function lookupProfile(name, prop) {
    // Iterate through each element in cotact list
    for (var i = 0; i < contacts.length; i++) {
        // Check if name parameter is a name in the contact list
        if (contacts[i].firstName === name) {
            // Return property value or Return custom statement
            return contacts[i][prop] || "No such property";
        } 
    }
    // Return suctom statement if contact does not exist
    return "No such contact";
}

// Values can be changed to test function
var data = lookupProfile("John", "address")

console.log(data);