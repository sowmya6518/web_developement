import mysql from 'mysql2'

const connection = mysql.createPool({
      host :'127.0.01',
      user : 'root',
      password :'password',
      database : 'online_education'
}).promise()

async function readCourses(){
      const output = await connection.query("select * from courses;")
      return output[0]
}
async function readCourseById(){
      const output = await connection.query("select * from courses where id ="+ id)
      return output[0]
}


// const ans = await readCourses()
// console.log(ans)

const answer = await readCourses()
console.log(answer)