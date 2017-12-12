var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function () {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return displayRoot(path, req, res);

        case "/portfolio":
            return displayPortfolio(path, req, res);

        default:
            return display404(path, req, res);

        case "/foods":
            return displayFoods(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/CSS":
            return displayCSS(path, req, res);
    }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>Home Page</h1>" +
        "<a href='/portfolio'>Portfolio</a>" +
        "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayPortfolio(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>My Portfolio</h1>" +
        "<a href='/'>Go Home</a>" +
        "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
}

function displayFoods(url, req, res) {
    fs.readFile('foods.html', function (err, data) {
        if (!err) {

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    })

}

function displayMovies(url, req, res) {
    fs.readFile('movies.html', function (err, data) {
        if (!err) {

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    })
}

function displayCSS(url, req, res) {
    fs.readFile('css.html', function (err, data) {
        if (!err) {

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    })
}