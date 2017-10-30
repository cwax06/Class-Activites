// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
  apiKey: "AIzaSyBWqJDve9kS0OGAGMQkOKPHGnSKiCzpjMU",
  authDomain: "my-attempt-of-a-project.firebaseapp.com",
  databaseURL: "https://my-attempt-of-a-project.firebaseio.com",
  projectId: "my-attempt-of-a-project",
  storageBucket: "my-attempt-of-a-project.appspot.com",
  messagingSenderId: "474869829348"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
//var database = ...

var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

  var data = snapshot.val();
  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.

    highPrice = data.highPrice;
    highBidder = data.highBidder;



    // Change the HTML to reflect the stored values

    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);

    // Print the data to the console.

    console.log(data);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").text(initialBidder);
    $("#highest-price").text(initialBid);

    // Print the data to the console.
    console.log(data);

  };


  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values

  var name = $("#bidder-name").val().trim();
  var bidderPrice = $("#bidder-price").val().trim();

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: name
    })

    database.ref().set({
      highPrice: bidderPrice
    })

    // Log the new High Price
    console.log("New High Price!");
    console.log(bidderName);
    console.log(bidderPrice);

    // Store the new high price and bidder name as a local variable
    highBidder = bidderName;
    highPrice = bidderPrice;

    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
