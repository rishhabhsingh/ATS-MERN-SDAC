const { log } = require("console")
const {restaurantModel} = require ("../model/menu.model.js")

//adddata
const addData = async(req, res) => {
    try {
        const {name, price} = req.body
        const data = await restaurantModel.create({name, price})
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

//showdata
const showData = async(req, res) => {
    try {
        const data = await restaurantModel.find()
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

//updatedata
const updateData =  async (req, res)=>{
    try {
        const data = await restaurantModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

//deletedata
const deleteData =  async (req, res)=>{
    try {
        const data = await restaurantModel.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {addData, showData, updateData, deleteData}