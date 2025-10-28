const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});
