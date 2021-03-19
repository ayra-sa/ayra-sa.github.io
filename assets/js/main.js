// nav menu
(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav");

    hamburgerBtn.addEventListener("click", showNav);
    closeNavBtn.addEventListener("click", hideNav);

    function showNav(){
        navMenu.classList.add("open");
        bodyScrolling();
    }
    function hideNav(){
        navMenu.classList.remove("open");
        fadeOut();
        bodyScrolling();
    }
    function fadeOut(){
        document.querySelector(".fade-out").classList.add("active");
        setTimeout(() =>{
            document.querySelector(".fade-out").classList.remove("active");
        }, 300);
    }
    // attach an event handler to document
    document.addEventListener("click", (event) =>{
        if (event.target.classList.contains('link-item')) {
            // make sure event.target.hash has a value before overridding default behavior
            if (event.target.hash !=="") {
                // prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // active new 'section'
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // deactivate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                // if clicked 'link-item is contained within the nav menu
                if(navMenu.classList.contains("open")){
                // activate new navigation menu 'link-item'
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                // hide nav menu
                    hideNav();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if (hash === item.hash){
                            // activate new navigation menu 'link-item'
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("outer-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOut();
                }
                // add hash to url
                window.location.hash = hash;
            }
        }
    })
})();

function bodyScrolling(){
    document.body.classList.toggle("hidden-scroll");
}

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
        if (!section.classList.contains("active")) {
            section.classList.add("hide");
        }
    })
})();

window.addEventListener("load", () =>{
    // preloader
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },600)
});