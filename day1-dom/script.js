// Dom manipulation

// add element
// remove element
// data change
// style

// console.log(document)
/**
select/access  element
 -> select by id
 -> select by className
 -> select by tag name
 */
//  console.log(document.getElementById("demo-id"))

// console.log( document.getElementsByClassName("card") )

// console.log( document.getElementsByTagName("p") )

// select by Id 
// document.getElementById("demo-id").innerText = "welcome to javascript bactch"


// document.getElementsByClassName("card")[0].innerHTML = "<h1>hello</h1>"

// document.getElementsByTagName("p")[1].style.color = "red"
// let d = document.getElementsByClassName("card")[1]
// d.style.height = "100px"
// d.style.backgroundColor = "blue"


/**
 * Event  - click,change,input,mouse enter
 * Event hendler - onchage,onclick,onmouseenter,onmouseleave
 * Event Listener -  doSomeThing(), doSomeThing1(),leaveOnuse()
 * 
 */

function doSomeThing(){
    let d = document.getElementsByClassName("card")[0];
    console.log(d)
        d.innerHTML= "<h1>hello</h>"
        d.style.backgroundColor = "blue"
        d.style.height= "300px"
    }
    function doSomeThing1(){
        let d = document.getElementsByClassName("card")[1];
        console.log(d)
            d.innerHTML= "<h1>hello</h>"
            d.style.backgroundColor = "blue"
            d.style.height= "300px"
        }
        function leaveOnuse(){
            let d = document.getElementsByClassName("card")[1];
        console.log(d)
            d.innerHTML= "<h1>Bye Bye</h>"
            d.style.backgroundColor = "green"
            d.style.height= "200px"
        }
    
    document.getElementsByClassName("card")[0].addEventListener("click",doSomeThing)