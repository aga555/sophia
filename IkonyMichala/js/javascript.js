let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 1;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("nav__link--current");
        } else {
            link.classList.remove("nav__link--current");
        }
    });
});

//Nav mobile
function nav_mobile() {
    let x = document.querySelector("nav ul .nav__links");
    if (!x.classList.contains("hidden")) {
        x.classList.add("hidden");
    } else {
        x.classList.remove("hidden");
    }
}


function menu_check_width() {
    let m = document.getElementById('nav__links');
    //Show menu by default, specially when changing width from mobile to normal 
    if (window.innerWidth <= 768) {
        if (!m.classList.contains("hidden")) {
            m.classList.add("hidden");
        }
    } else {
        //Hide menu, when changing width from normal to mobile
        if (m.classList.contains("hidden")) {
            m.classList.remove("hidden");
        }
    }
}

window.addEventListener("resize", menu_check_width);


//Hide menu, on mobile after onload
//------
function menuMobile_hiden_onload() {
    let m = document.getElementById('nav__links');
    let w = window.innerWidth;
    if (w <= 768) {
        //        alert("menuMobile_hidden_onload");
        if (!m.classList.contains("hidden")) { //<-- poprawić powinno być ! chyba
            m.classList.add("hidden");
        }
    }
}

window.addEventListener("load", menuMobile_hiden_onload);



function mobileMenu__collapse() {
    if (window.innerWidth <= 768) {
        let x = document.querySelector("nav ul .nav__links");
        x.classList.add("hidden");
    }
}

mainNavLinks.forEach(function (el) {
    el.addEventListener("click", mobileMenu__collapse, false);
});
