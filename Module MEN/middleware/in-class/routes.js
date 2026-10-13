const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=> {
    //res.send("Home")
    res.sendFile(path.join(__dirname, "./views", "form.html"))
})

app.post("/afterSubmit", (req, res)=> {
    const data = req.body
    res.json(data)
})

app.get("/about", (req, res)=> {
    res.send("About")
})

app.listen(3000, () =>{
    console.log("running...");
    
})