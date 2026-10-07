const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error:", err))

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  department: {
    type: String,
    enum: ['HR', 'IT', 'Sales', 'Marketing', 'Finance'],
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 60,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    min: 10000,
    max: 500000,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

const Emp = mongoose.model("Employee", empSchema)

async function addEmployee(ename, email, edept, eage, ecity, esal) {
  const emp = new Emp({
    name: ename,
    email: email,
    department: edept,
    age: eage,
    city: ecity,
    salary: esal
  })
  await emp.save();
  console.log("Employee Added:", emp)
}

async function viewEmployees(ename) {
  const employees = await Emp.find({ name: ename })
  console.log("Employees:", employees)
}

async function deleteEmployees(ename) {
  const result = await Emp.deleteMany({ name: ename })
  console.log("Deleted Employees:", result)
}

async function updateEmployee(ename, newDept, newSal) {
  const result = await Emp.updateOne(
    { name: ename },
    { $set: { department: newDept, salary: newSal } }
  );
  console.log("Updated Employee:", result)
}

//1
addEmployee("Rishabh", "rishabh@example.com", "IT", 25, "Mumbai", 50000)
addEmployee("Rishab", "rishab@example.com", "IT", 23, "Mumbai", 50000)

//2
viewEmployees("Rishabh")

//3
deleteEmployees("Rishabh")

//4
updateEmployee("Rishab", "HR", 60000)

//5
addEmployee("Rish", "rish@example.com", "IT", "Mumbai", 50000)
//ValidationError: Employee validation failed: age: Cast to Number failed for value "Mumbai" (type string) at path "age" for model "Employee", salary: Path `salary` is required.

//6
addEmployee("Rish", "rish@example.com", "IT", 16, "Mumbai", 5000)
//ValidationError: Employee validation failed: salary: Path `salary` (5000) is less than minimum allowed value (10000).

//7
addEmployee("Rishabh", "rishabh@example.com", "IT", 25, "Mumbai", 50000)
addEmployee("Rishabh", "rishabh@example.com", "IT", 25, "Mumbai", 50000)
//MongoServerError: E11000 duplicate key error collection: studentdb.employees index: email_1 dup key: { email: "rishabh@example.com" }




