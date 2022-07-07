const nav_ele = document.querySelector(".nav");
const bottom_ele = document.querySelector(".bottom");
console.log(bottom_ele.offsetTop);
console.log(nav_ele.offsetHeight);
nav_ele.classList.remove("active");
window.addEventListener("scroll", () => {
if(window.scrollY > bottom_ele.offsetTop - nav_ele.offsetHeight){
        nav_ele.classList.add("active")
    }else{
        nav_ele.classList.remove("active")
    }
});
