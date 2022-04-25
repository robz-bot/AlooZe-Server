const hostname = "127.0.0.1";
const port = 3000;

var http = require("http");
var express = require("express");
// var stream = require("file-stream");
const fs = require("fs");
const pdfparse = require("pdf-parse");

const filepath = "demo.pdf";
const pdfFile = fs.readFileSync(filepath);

var server = express();

var result = {};
pdfparse(pdfFile).then(function(data) {
    server.get("/data", function(req, res) {
        console.log(data.numpages);
        result = {
            numPages: data.numpages,
            info: data.numpinfoages,
            content: data.text,
        };
        res.send(result);
    });

    console.log(result);
    console.log("Stream ended...");
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});