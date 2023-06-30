// Lookup values
function phoneticLookup(val) {
    var result = "";
    var lookup =  {
       "adam": "Alpha",
       "boston": "Beta",
       "chicago": "Charlie",
       "denver": "Delta",
       "easy": "Echo",
       "florida": "Foxtrot"
    };
    result = lookup[val];

    return result;
}

console.log(phoneticLookup("florida"));