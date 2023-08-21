console.log("Hi")
//Normal Function//
function add(a,b)
{
      return a+b
}
let answer = add(15,18)
console.log(answer)
//Arrow fucntion-----//
let mul = (c,d) => {
      console.log(c*d)
}
mul(49948,12)

let oddEven = (num) =>
{
      if(num%2===0)
      {
            console.log("even")
      }
      else{
            console.log("odd")
      }
}
oddEven(8)