// nav menu
(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav");

    hamburgerBtn.addEventListener("click", showNav);
    closeNavBtn.addEventListener("click", hideNav);

    function showNav(){
        navMenu.classList.add("open")
    }
    function hideNav(){
        navMenu.classList.remove("open")
        fadeOut()
    }
    function fadeOut(){
        document.querySelector(".fade-out").classList.add("active");
        setTimeout(() =>{
            document.querySelector(".fade-out").classList.remove("active");
        }, 300)
    }
})();


// about section
(() =>{
    const aboutSection = document.querySelector(".about-sec"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        // if event.target contains 'tab-item' class and not contains 'active' class
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new 'tab-item'
            event.target.classList.add("active", "outer-shadow");
            // deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

// hide all sections
(() => {

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if (condition) {
            
        }
    })
})