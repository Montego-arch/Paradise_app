console.log("HELLO DESK")

// dom ready

document.addEventListener("DOMContentLoaded", (event)=>{
    // navbar and anchor element
    let navbar = document.querySelector(".navbar-collapse");
    let anc = document.createElement("a");
    anc.href = "https://erpnext.com";
    anc.innerText='Visit ERPNext';
    navbar.prepend(anc);
})