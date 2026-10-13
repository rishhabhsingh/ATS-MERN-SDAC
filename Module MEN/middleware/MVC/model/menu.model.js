const mongoose = require('mongoose')
const { connectDb } = require('../db.js')

connectDb()

const restaurantSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
}, {timestamps:true})

const restaurantModel = mongoose.model("Restaurant", restaurantSchema)

module.exports = {restaurantModel}