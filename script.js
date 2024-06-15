// Part 1 
// declare a variable 
// let counter = 0

// function count(){
//   counter += 1
//   count()
// }

// try {
//   count()
// } catch (error) {
//   console.log("Error message:", error)
//   console.log("Function count:", counter)
// }


//part 2 trampolining 
// write a function that flattens an array of nested arrafys no matter how deeply nested they are: 

const data = [
  [1,2,3],
  [4,[5,6,[9,8]]],
  10
];

function flatten(arr) {
  let flat = []
  for(let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flatten(arr[i]))
    } else {
      flat.push(arr[i])
    }
  }
  return flat
}

console.log(
  flatten(data)
)

// converting that to trampoline function