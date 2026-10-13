const express = require('express')
const {addData, showData, updateData, deleteData} = require("../controllers/menu.controller.js")

const router = express.Router()

router.post("/addDish", addData)
router.get("/showDish", showData)
router.patch("/updateDish/:id", updateData)
router.delete("/deleteDish/:id", deleteData)

module.exports = {router}