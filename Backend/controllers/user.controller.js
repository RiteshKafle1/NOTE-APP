const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password)
      return res.json({ error: true, message: "No Empty Fields are allowed" });

    const emailExists = await userModel.findOne({ email });
    if (emailExists)
      return res.json({ error: true, message: "Account Already Exists" });

    const salt = await bcrypt.genSalt(10);
    const Password = await bcrypt.hash(password, salt);

    const user = new userModel({
      fullName,
      email,
      password: Password,
    });
    await user.save();
    return res.json({
      error: false,
      message: "Account Created Successfully",
      name: user.fullName,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in register function", registerUser);
    return res.json({ error: true, message: "Something went wrong" });
  }
};
module.exports = { registerUser };
