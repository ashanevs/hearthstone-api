const express = require("express");
const router = express.Router();
const setController = require("../controllers/set");

router.get("/showset/:name", setController.showSet);
router.get("/", setController.index);
router.get("/id/:id", setController.getById);
router.get("/name/:name", setController.getByName);
router.post("/", setController.create);
router.put("/:name", setController.edit);
router.delete("/:name", setController.delete);

module.exports = router;
