const menu = document.querySelector(".main-menu");

const menu2 = document.querySelector(".right-menu");



const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");

menu.addEventListener("click", () => {

    menu2.classList.toggle("active");

    div1.classList.toggle("active");
    div2.classList.toggle("active");
})