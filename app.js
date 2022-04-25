var express = require("express");
const fs = require("fs");
const pdfparse = require("pdf-parse");

const hostname = "https://alooze-server.vercel.app/"; //"127.0.0.1"; // ||
const port = process.env.PORT || 3000;

const filepath = "demo.pdf";
const pdfFile = fs.readFileSync(filepath);

var server = express();

var result = {};
// pdfparse(pdfFile).then(function(data) {
//     server.get("/data", function(req, res) {
//         console.log(data.numpages);
//         result = {
//             numPages: data.numpages,
//             info: data.numpinfoages,
//             content: data.text,
//         };
//         res.send(result);
//     });

//     console.log(result);
//     console.log("Stream ended...");
// });
server.get("/hello", async(req, res) => {
    try {
        res.json({
            status: 200,
            message: "Hello World",
        });
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
});

server.listen(port);
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });