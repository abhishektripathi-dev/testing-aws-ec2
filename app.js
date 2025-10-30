const express = require("express");
const path = require("path");

const sequelize = require("./config/db");
const User = require("./models/User");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", userRouter);

sequelize
    .sync()
    .then(() => {
        console.log("Database sync...");
        app.listen(3000, () => {
            console.log("Server running on port 3000.");
        });
    })
    .catch((err) => {
        console.log(err);
    });
