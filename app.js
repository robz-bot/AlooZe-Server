const express = require("express");
const app = express();
const pdfContent = require("./api/get-pdf");

// app.use(express.json({ extended: false }));

app.use("/api/pdf", pdfContent);
app.use("/", (req, res) => {
    res.json({
        status: 200,
        content: "hello world",
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));