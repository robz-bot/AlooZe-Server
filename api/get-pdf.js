const express = require("express");
const router = express.Router();
const fs = require("fs");
const pdfparse = require("pdf-parse");
var result = {};
const filepath = "demo.pdf";
const pdfFile = fs.readFileSync(filepath);
router.get("/", async(req, res) => {
    try {
        pdfparse(pdfFile).then(function(data) {
            console.log(data.numpages);
            result = {
                numPages: data.numpages,
                info: data.numpinfoages,
                content: data.text,
            };
            res.json(result);

            console.log(result);
            console.log("Stream ended...");
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;