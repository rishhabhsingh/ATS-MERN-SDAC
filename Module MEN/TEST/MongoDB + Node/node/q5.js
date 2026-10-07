const fs = require("fs")

fs.readFile('./q5employee.txt', (error, data)=>{
    if(data){
        console.log(data.toString());
    }
    else{
        console.log("Error reading file");
    }
})