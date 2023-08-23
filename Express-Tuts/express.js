const express = require("express")

const app = express()

//const path = require('node:path')



app.get('/', sayHello,sayHey,sayBye)

app.get('/abc',(req,res)=>{
      res.send("abc")
})

app.use(sayHi)


function sayHello(req,res,next){
      req.abc ="hi property"
      console.log("Hello My Dear....!!!")
      next()
}
function sayHey(req,res,next){
      console.log("Hey listen me....")
      console.log(req.abc)
      next()
}

function sayBye(req,res,next){
      console.log("Miss you....Bye***")
      next()
}

function sayHi(req,res,next){
      res.send("Hi how are you....!!!")
}

app.listen(3000,()=>{
      console.log("server is started and running....")
})