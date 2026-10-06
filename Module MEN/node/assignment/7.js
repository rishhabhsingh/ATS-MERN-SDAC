const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error:", err))

const studentSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  email: String,
  course: String,
  age: Number,
  city: String,
  fees: Number,
  isActive: Boolean
})

const Student = mongoose.model("Student", studentSchema)

async function addStudent() {
  const student = new Student({
    id: 101,
    name: "Rishabh",
    email: "rishabh@example.com",
    course: "Node.js",
    age: 25,
    city: "Vasai",
    fees: 15000,
    isActive: true
  })

  await student.save();
  console.log("Student Added:", student)
}

async function viewStudents() {
  const students = await Student.find()
  console.log("All Students:", students)
}

async function deleteStudents() {
  const result = await Student.deleteMany({ city: "Vasai" })
  console.log("Deleted Students:", result)
}

async function updateStudent() {
  const result = await Student.updateOne(
    { id: 101 },
    { $set: { course: "MongoDB", fees: 20000 } }
  );
  console.log("Updated Student:", result)
}

//addStudent()
//viewStudents()
//deleteStudents()
//updateStudent()
