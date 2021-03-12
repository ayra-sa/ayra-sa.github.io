const styleToggler = document.querySelector(".style-toggler");

styleToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})