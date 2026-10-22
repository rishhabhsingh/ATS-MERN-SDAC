const Room = require("../models/Room");

// show all rooms
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.render("rooms", { rooms });
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
};

// show add form
exports.showAddForm = (req, res) => {
  res.render("addRoom");
};

// save new room
exports.addRoom = async (req, res) => {
  try {
    await Room.create(req.body);
    res.redirect("/rooms");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

// show edit form
exports.showEditForm = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.render("editRoom", { room });
  } catch (err) {
    res.status(400).send("Invalid ID");
  }
};

// update room
exports.updateRoom = async (req, res) => {
  try {
    await Room.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/rooms");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

// delete room
exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.redirect("/rooms");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};