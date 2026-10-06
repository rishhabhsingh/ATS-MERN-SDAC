const { log } = require("node:console")

const pi = 3.14

function add(a,b){
    console.log(a + b)
}

class Emp{
    id;
    name;
    sal;

    display(){
        console.log(this.id + "" + this.name + "" + this.sal);
    }
}

module.exports = {pi, add, Emp}