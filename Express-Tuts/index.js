const express = require("express")

const app = express()

const path = require('node:path')

app.get('/', handleRoot)

app.get('/about', handleabout)

app.get('/info', handleinfo)

app.get('/sayHi/:name', handleSayHi)

function handleSayHi(req, res){
      let name = req.params.name
      res.send("Hi " + name)
}

function handleRoot(req,res) {
//res.send("Root Route")
console.log("Hi from handleroot")
res.sendFile(path.join(__dirname, 'rootHTML.html'))
}
function handleabout(req,res) {
      res.send("About Route")
}
function handleinfo(req,res) {
      //res.send("Info Route")
      res.json({"name":"FSD", "tutor":"VB"})
      //res.sendFile('C:/Users/895132/OneDrive - Cognizant/Desktop/Express-Tuts/rootHTML.html')
      //res.sendFile(path.join(__dirname, 'rootHTML.html'))
}



app.listen(3000,()=>{
      console.log("server is started and running....")
})

