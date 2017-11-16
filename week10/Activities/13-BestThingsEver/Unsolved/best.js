var fs = require('fs');
// var arguments = process.argv;
var fileToRead = 'Unsolved/best_things_ever.txt'
console.log(fileToRead);


// fs.readFile(fileToRead, {
//     encoding: 'utf-8'
// }, function (err, data) {
//     console.log(err);
//     if (!err) {
//         var array = data.split(',');
//         array.forEach(function (item) {
//             console.log(item);
//         });
//     }
// });

fs.readFile("Unsolved/best_things_ever.txt", "utf-8", function (err, data) {

    if (err) {
        console.log("Error", err);
    }

    var array = data.split(", ");

    fs.writeFile("newFile1.txt", array.join("/n"), function (err) {
        console.log("Error writing: ", err);
    });
});