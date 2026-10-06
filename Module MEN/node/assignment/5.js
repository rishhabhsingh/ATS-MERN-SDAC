const fs = require("fs")
const studentInfo = "Name: Rishabh\nAge: 25\nCity: Vasai"

fs.writeFile("student.txt", studentInfo, (err) => {
  if (err) {
    console.error("Error writing file:", err)
    return
  }
  console.log("student.txt created and data written successfully!")

  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err)
      return
    }
    console.log("\nReading student.txt content:")
    console.log(data)
  })
})
