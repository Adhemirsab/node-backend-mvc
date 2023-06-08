const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();
const {
  validatorRegisterItem,
  validatorLoginItem,
} = require("../validators/auth");
//http://localhost:3002/api/v1/auth
router.post("/login", validatorLoginItem, loginCtrl);

router.post("/register", validatorRegisterItem, registerCtrl);

module.exports = router;
