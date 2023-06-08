const bcryptjs = require("bcryptjs");

// passwordPlain: contrase sin encriptar
//nivel de aleatoridad
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};
// hashPassword: contrase;a encriptada
const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword);
};
module.exports = { encrypt, compare };
