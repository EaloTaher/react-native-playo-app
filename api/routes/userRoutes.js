const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", authController.Register);
router.post("/login", authController.Login);

module.exports = router;
