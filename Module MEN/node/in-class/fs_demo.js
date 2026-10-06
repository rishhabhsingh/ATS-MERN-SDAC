const fs = require('fs');
fs.readFile('./text.txt',(err,data)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log(data.toString());
        
    }
})
fs.writeFile('./text.txt',"Shushant",(err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log("Data written");
        
    }
})
fs.appendFile('./text.txt',"Aditya",(err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log("data appended");
        
    }
})
fs.unlink('./text.txt',(err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log("data deleted");
        
    }
})

fs.mkdir('./newfolder',(err,data)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("folder created");
    }
})
fs.rmdir('./newfolder',(err,data)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("folder deleted");
    }
})