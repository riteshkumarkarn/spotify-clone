console.log("Welcome");

let hamBurger = document.querySelector(".hamburger");
hamBurger.addEventListener(("click"), ()=> {
    document.querySelector(".leftBox").style.left = "0";
})

let closeLeftNav = document.querySelector(".closeBtn");
closeLeftNav.addEventListener(("click"), ()=> {
    document.querySelector(".leftBox").style.left = "-120%";
})