const func=require('./add.js')

const path = require('node:path');

console.log(path.dirname(__dirname))
console.log(path.dirname(__filename))

console.log(path.basename(__dirname))
console.log(path.basename(__filename))

console.log(__dirname.split(path.delimiter))


func.add(20,30)
func.sub(50,10)
