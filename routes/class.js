const express = require("express");
const router = express.Router();
const classController = require("../controllers/class");

router.get("/", classController.index);
router.post("/", classController.create);
router.put("/:name", classController.edit);
router.delete("/:name", classController.delete);

module.exports = router;
