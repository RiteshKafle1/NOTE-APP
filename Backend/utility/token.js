const webToken = require("jsonwebtoken");

const generateToken = async (data) => {
  try {
    const token = webToken.sign({ userId: data }, proces.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    return token;
  } catch (error) {
    console.log("Error in generating Token", error);
    throw new Error("Invalid Credentials");
  }
};
module.exports = generateToken;
