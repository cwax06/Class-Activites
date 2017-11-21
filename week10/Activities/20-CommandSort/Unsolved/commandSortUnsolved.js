// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var nodeArg = process.argv;

// create empty array
var numArray = [];

// for loop through the array
for (var i = 2; i < numArray.length; i++) {

    //"push" (add) each of these numbers to our numArray
    numArray.push(parseFloat(nodeArg[i]))
}

console.log(numArray);

console.log(numArray.sort(sortNums));

function sortNums(a, b) {
    return (a - b);
}

console.log(numArray);

console.log(numArray.sort(sortNums));

function sortNums(a, b) {
    return (a - b);
}
