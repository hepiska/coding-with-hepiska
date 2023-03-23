
function factorial(x) {
  if (x == 1) {
    return 1
  }
  return factorial(x - 1) * x
}


// result 
// 1! = 1 = 1
// 2! = 2 x 1 = 2
// 3! = 3 x 2 x 1 = 6
console.log(factorial(3))
console.log(factorial(4))
