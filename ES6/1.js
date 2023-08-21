console.log("Hello from 1")
let name = "Devapujala Sowmya"
console.log(`Hi ${name} welcome to web development`)

let arr = [2,4,6,8]
//let ele1=arr[1]
//let ele2=arr[3]
//let ele3=arr[0]
//let ele4=arr[2]
let [ele3,ele4,ele2,ele1] = arr
console.log(ele1,ele2,ele3,ele4)

let course = {
      'topic1':'HTML',
      'topic2':'CSS',
      'topic3':'JS',
      'topic4':'React'
}
let {topic1, topic2, topic3, topic4} = course

console.log(topic1, topic2, topic3,topic4)