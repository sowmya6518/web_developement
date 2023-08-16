function callbacktest()
{
      console.log("I am being printed inside callbacktest function")
}

function add(a, b, sample)
{
      console.log(a+b)
      sample()
}
let A=1
let B=2
add(A,B, callbacktest)

const arr =[1,5,6,2]

arr.forEach(function XYZ(val)
{
      console.log(val)
})
let sum_value = 0

arr.forEach(function avg(ele)
{
      sum_value = sum_value + ele
      console.log("Sum of last two numbers is " + sum_value)

})
arr.forEach(function avge(ele)
{
      average = sum_value/5
      console.log("average of numbers in array" + average)

})


