const humburger = document.querySelector(".humburger");
const navCont = document.querySelector("nav");
const closeHumburger = document.querySelector(".close-humburger");

humburger.addEventListener("click", () =>{
    navCont.classList.add("active")
})

closeHumburger.addEventListener("click", () =>{
    navCont.classList.remove("active")
})