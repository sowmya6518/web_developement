const httpmod = require("node:http")
const fs = require("node:fs")

const server = httpmod.createServer(handleRequests)

function handleRequests(request, response){

      // response.end(request.url)

//       const course= {
//             "name" : "FSD",
//             "platform" : "Entri",
//             "User" : "Sowmya.D"
//       }
// //response.writeHead(200, {"Content-Type":"text/plain"})
// //response.end("Hello, Thanks for requesting this server")
// //response.writeHead(200, {"Content-Type":"application/json"})
response.writeHead(200, {"Content-Type":"text/html"})
// //response.end(JSON.stringify(course))
// response.end("<h1>Hello World...!!</h1>")
if(request.url === '/'){
      const content = fs.readFileSync("./base.html", "UTF-8")
      response.end(content)
}
else if(request.url === '/info')
{
      response.end("<h1>Hello World...!!</h1>")
}
else if(request.url === '/about'){
      response.end("<h1>Hello World...!!!</h1>")

}
}
server.listen(3000, ()=>{
      console.log("server is listening on port 3000")
})
