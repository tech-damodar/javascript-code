for (let i = 1; i < 10; i++) {
    let pro = document.createElement("div");
    pro.classList.add("card");
    // console.log(pro)

    let pname = document.createElement("h1");
    pname.innerText = "iphone";
    // console.log(pname)

    let pprice = document.createElement("h3");
    pprice.innerText = "1,20,000";
    // console.log(pprice)
    pro.appendChild(pname);
    pro.appendChild(pprice);

    // console.log(pro)
    document.getElementById("parent").appendChild(pro);
}
