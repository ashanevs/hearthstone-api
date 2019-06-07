const express = require("express");
const router = express.Router();
const cardController = require("../controllers/card");

router.get("/", cardController.index);
router.get("/id/:id", cardController.getById);
router.get("/name/:name", cardController.getByName);
router.post("/", cardController.create);
router.put("/:name", cardController.edit);
router.delete("/:name", cardController.delete);

module.exports = router;
