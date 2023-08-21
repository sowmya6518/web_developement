class person{
      constructor(name, age, gender){
            this.name = name
            this.age =  age
            this.gender =  gender
      }

Walk(){
      console.log(this.name +" is Walking")
}
Run(){
      console.log(this.name +" is Runing")
}
Eat(){
      console.log(this.name +" is Eating")
}
}
class student extends person{
      constructor(name, age, gender, phno, rollno, grade){
            super(name,age,gender,phno)
            this. rollno=  rollno
            this. grade=  grade
      }
      study(){
            console.log(this.name +" is studying")
      }
      write(){
            super(name,age,gender)
            console.log(this.name +" is writing")
      }
}

let person1 =  new person('Sowmya','24','Female')
let person2 =  new person('Ram','24','Female')
let s1 = new student()
console.log(person1.name)
console.log(person2.gender)
person1.Eat()
