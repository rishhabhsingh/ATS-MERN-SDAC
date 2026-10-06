const mongoose = require('mongoose')
const { connectDb } = require('./db')

connectDb()

const empSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        min: 100000,
        max: 1000000,
        required: true
    },
    designation:{
        type: String,
        enum: ['Manager', 'Developer', 'Tester'],
        required: true
    }
}, {timestamps: true})

const empModel = mongoose.model("emp", empSchema)


async function displayEmp(){
    try {
        const empData = await empModel.find()
        console.log(empData)
    } catch (error) {
        console.error(error)
    }
}

async function addEmp(ename, esal, edesg){
    try {
        await empModel.create({
            name: ename,
            salary: esal,
            designation: edesg
        })
            console.log("Employee added successfully...")
            displayEmp()
    } catch (error) {
        console.error(error)
    }  
}

async function updateEmp(id, ename, esal, edesg){
    try {
        await empModel.findByIdAndUpdate(id, {
            name: ename,
            salary: esal,
            designation: edesg
        })
        console.log("Employee updated successfully...")
        displayEmp()
    } catch (error) {
        console.error(error)
    }
}

async function deleteEmp(id){
    try{
        await empModel.findByIdAndDelete(id)
        console.log("Employee Deleted Succesfully!!!")
        displayEmp()
    }
    catch(err){
        console.log(error);
    }
}

addEmp("Sushant", 500000, "Developer")
//displayEmp()
//updateEmp("6ac4757781e88bb8ab3f90bf", "Sushant", 600000, "Manager")
//deleteEmp("6ac4757781e88bb8ab3f90bf")

//addEmp("Aditya", 700000, "Tester")
//addEmp("Rahul", 200000, "Manager")
//addEmp("Aaradhya", 400000, "Developer")
//empModel.find()
//empModel.find({salary: {$gt: 500000}})
//empModel.find({salary: {$gt: 500000}}).sort({salary: -1})

