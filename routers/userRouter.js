const express = require("express");
const { postUserinfo } = require("../controllers/userController");

const router = express.Router();

router.post("/user", postUserinfo);
// router.get("/user", postUserinfo);

module.exports = router;
