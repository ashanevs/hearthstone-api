const express = require("express");
const router = express.Router();
const classController = require("../controllers/class");

router.get("/", classController.index);
router.get("/id/:id", classController.getById);
router.get("/name/:name", classController.getByName);
router.post("/", classController.create);
router.put("/:name", classController.edit);
router.delete("/:name", classController.delete);

router.get("/test/:name", classController.showClasses);

module.exports = router;
