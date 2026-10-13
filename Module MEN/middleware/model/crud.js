const express = require('express')
const mongoose = require('mongoose')
const { connectDb } = require('./db')
const app = express()

connectDb()
app.use(express.json())

const empSchema = mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        required:true
    },
    salary:{
        type:Number,
        min:1000,
        max:1000000,
        required:true
    }
}, {timestamps:true})

const empModel = mongoose.model('Employee', empSchema)

// Add Employee
app.post('/add', async (req, res) => {
    try {
        const {name, salary} = req.body
        const data = await empModel.create({name, salary})
        res.json(data)
    }
    catch (err) {
       console.log(error);
    }
})

// Get All Employees
app.get('/', async (req, res) => {
    try {
        const data = await empModel.find()
        res.json(data)
    }
    catch (err) {
        console.log(error)
    }
})

//Update Employee
app.patch('/update/:id', async (req, res)=>{
    try {
        const data = await empModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

//Delete Employee
app.delete('/delete/:id', async (req, res)=>{
    try {
        const data = await empModel.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

//Search By Id
app.get('/search/:id', async (req, res)=>{
    try {
        const data = await empModel.findById(req.params.id, req.body, {new:true})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, ()=>{
    console.log("server running on port 3000")
})
