import { Student } from "./Student"
import { Person } from "./Person"
import { Triangle } from "./Triangle"
import { Worker } from "./Worker"
let student1 = new Student("John",1245,2,123456,"Legionarska 1, 01001 Zilina")
let student2 = new Student("Sam",1,5,456789,"Legionarska 2, 01001 Zilina")
let person1 = new Person("Jhon", 21 ,23000);
let person2 = new Person("Steve", 32 ,40000);
let person3 = new Person("Martin", 16 ,2700);
let triangle = new Triangle(3,4,5)
let worker1 = new Worker("Jozko","Mrkvicka",4,7,1990)
worker1.setJob("IT programmer"), worker1.setSalary("2100 eur")

console.log(student1.name + ": " + student1.studentNumber)
console.log(student1.studentNumber2 +" "+ student1.phoneNumber+" "+ student1.address)
console.log(student2.studentNumber2 +" "+ student2.phoneNumber+" "+ student2.address)
console.log(BudgetTotal([person1,person2,person3]))
console.log("Perimeter:" + Perimeter(triangle))
console.log("Area:" + Area(triangle))
console.log(worker1.name +" "+ worker1.surname +", "+ worker1.job +", salary:"+ worker1.salary)


function BudgetTotal(people:Person[]) {
    let a:number = 0
    for (let i:number = 0; i < people.length; i++) {
        a = a + people[i].budget
    }
    return a
}

function Perimeter(triangle: Triangle){
   let per = triangle.a + triangle.b + triangle.c
   return per
}

function Area(triangle: Triangle){
    let s:number = Perimeter(triangle) / 2
    let area:number = s * (s - triangle.a) * (s - triangle.b) * (s - triangle.c );
    return Math.sqrt(area)
}  