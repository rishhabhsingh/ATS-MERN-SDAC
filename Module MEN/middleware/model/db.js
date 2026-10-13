const mongoose = require('mongoose')

const connectDb = () => {
    mongoose.connect("mongodb://localhost:27017/emodel").then(()=>{
        console.log("connected...")
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = {connectDb}