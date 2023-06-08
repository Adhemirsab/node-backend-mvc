const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const authMiddleware = require("../middleware/session");
const checkRole = require("../middleware/rol");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItems,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");

router.get("/", authMiddleware, getItems);
router.get("/:id", validatorGetItem, getItem);
router.post(
  "/",
  authMiddleware,
  checkRole(["admin"]),
  validatorCreateItem,
  createItems
);
router.put("/:id", validatorCreateItem, validatorGetItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
