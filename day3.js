//object

// student =>{
//             name
//             roll 
//             course 
//             city 
//         }

let student = [
{
    name : "Rahul",
    rollNO : 121,
    course : "BCA"
},
{
    name :  "Amit",
    rollNo : 122,
    course : "BCA"
},
{
    name :  "Chintu",
    rollNo : 123,
    course : "Bcom"
}
]
// for(i=0;i<3;i++)
//     console.log(student[i])

// console.log(student.name,student.course)
// console.log(student)

// student.city ="Jaipur"

// console.log(student1)
// console.log(student2)
// console.log(student3)

// function doSome(num){
//     num()
//     console.log("happy learning ")
   
// }
// doSome(12)
// doSome("Damodar")
// doSome([12,23,345,56])
// doSome({
//     name:"schin",
//     mob:"12345"
// })


// doSome(function (){
//     console.log("logic function")
// }) // callback function


// Arrow function 

const doSome = (a)=> {
        console.log("happy learning in arrow fun.")
        console.log("I love my India")

        a();
    }   
doSome(
    ()=> console.log("function from callback !!")
);
