const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
exports.Register = async (req, res) => {
  try {
    const userData = req.body;

    const newUser = new User(userData);

    await newUser.save();

    const token = jwt.sign(
      {
        userId: newUser._id,
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({ token });
    await newUser.save();
  } catch (error) {
    console.log("Error creating user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "invalid email" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "invalid password" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({ token });
  } catch (error) {
    console.log("Error loggin in", error);
  }
};
