const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const BASE_URI = process.env.BASE_URI;
    await mongoose.connect(BASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("***CONEXION CORRECTA***");
  } catch (error) {
    console.log("***ERROR DE CONEXION***");
  }
};

module.exports = dbConnect;
