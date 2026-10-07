let movies = ["Sultan", "Dhurandhar", "Animal", "Deewar"];
console.log("Initial Movies:")
console.log(movies)

movies.push("'96")
console.log("\nAfter Adding '96:")
console.log(movies)

movies.pop()
console.log("\nAfter Removing Last Element:")
console.log(movies)

console.log("\nDisplaying All Movies:")
movies.forEach(movie => {
  console.log(movie)
});
