const humburger = document.querySelector(".humburger");
const bottomHeader = document.querySelector(".bottom-header");
const closeHumburger = document.querySelector(".close-humburger");

humburger.addEventListener("click", () =>{
    bottomHeader.classList.add("active")
})

closeHumburger.addEventListener("click", () =>{
    bottomHeader.classList.remove("active")
})