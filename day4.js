// foreach()
// Map()
// filter 
// sprid operator

// foreach 

// let arr = [12,34,46,67,78]

// arr.forEach(function (ele){
//     console.log(ele)

// })

// map()
// console.log(arr)
// let result = arr.map( ele=> ele*2 )

// filter 
// let result = arr.filter((ele)=>{
    // if(ele%2 == 0){
//         return ele%2 == 0
// })
// console.log("result : ",result)

// arr{
//     function foreach(fun){
//         // .... 
//         // ...
//         arr = [12,34,46,67,78,89,54,23] 
//         fun(34,1,[12,34,46,67,78,89,54,23])
//     }

// }

// let student = [
//     {
//         name : "Rahul",
//         rollNO : 121,
//         course : "BCA"
//     },
//     {
//         name :  "Amit",
//         rollNo : 122,
//         course : "BCA"
//     },
//     {
//         name :  "Chintu",
//         rollNo : 123,
//         course : "Bcom"
//     }
// ]

// student.forEach((ele,index,arr)=>{
//     console.log(ele.name)
// })
// let names = student.map((ele)=>{
//     return ele.name
// })

// console.log(names)


let arr = [12,34,45,56]
let arr2 = [...arr]    //[12,100,45,56]


console.log("arr : ",arr)
console.log("arr2 ",arr2)
arr2[1] = 100;
console.log("arr2 ",arr2)
console.log("arr : ",arr)
