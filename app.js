const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.static("storage"));
const dbConnect = require("./config/mongo");

const router = require("./routes/index.js");

//routes
app.use("/api/v1", router);

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

dbConnect();
