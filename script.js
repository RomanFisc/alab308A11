// Part 1 
// declare a variable 
let counter = 0
//create function that increments the variable and calls itself recursively 
function count(){
  counter += 1
  count()
}

try {
  count()
} catch (error) {
  console.log("Error message", error)
  console.log("Function count", counter)
}