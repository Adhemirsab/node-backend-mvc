const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET);
// user: objeto usuario
//sign() este recibe como primer argumento el payload
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};

//Se debe pasar el token de session JWT
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
