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

async function dbcall(){
      let response = await p1
      console.log(response)
}

dbcall()

console.log ('Sowmya')
