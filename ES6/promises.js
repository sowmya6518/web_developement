let p1 = new Promise((resolve, reject)=>{

      setTimeout(()=>{
            console.log('db call successful')
            resolve(25)
      },2000)
})

let p2 = new Promise((resolve, reject)=>{

      setTimeout(()=>{
            reject(new Error("DB Backend Failed"))
      },3000)
})

console.log('hello')
console.log(p1)
p1.then((response)=>{
      console.log (p1)
      console.log('Bye')
})
p2.catch((error)=>{
      console.log(error)
})

console.log ('Sowmya')
