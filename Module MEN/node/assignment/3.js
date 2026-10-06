// Create an array of student names
let students = ["Amit", "Priya", "Rohan", "Sneha"];
console.log("Initial Students:")
console.log(students)

// Add element
students.push("Karan")
console.log("\nAfter Adding 'Karan':")
console.log(students)

// Remove element
students.pop()
console.log("\nAfter Removing Last Element:")
console.log(students)

// Display all elements
console.log("\nDisplaying All Students:")
students.forEach(student => {
  console.log(student)
});
