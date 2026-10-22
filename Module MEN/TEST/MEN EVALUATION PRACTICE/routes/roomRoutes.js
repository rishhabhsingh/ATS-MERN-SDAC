const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");
const auth = require("../middleware/auth");

router.get("/", auth, roomController.getRooms);
router.get("/add", auth, roomController.showAddForm);
router.post("/add", auth, roomController.addRoom);
router.get("/edit/:id", auth, roomController.showEditForm);
router.post("/edit/:id", auth, roomController.updateRoom);
router.post("/delete/:id", auth, roomController.deleteRoom);

module.exports = router;