const User = require("../models/User");

exports.postUserinfo = async (req, res, next) => {
    try {
        const { username, password, gender } = req.body;

        const newUser = await User.create({ username, password, gender });

        res.status(201).json({ message: "User created", user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
