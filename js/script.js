const headerElement = document.querySelector("#header");
const navElement = document.querySelector(".nav");
let options = {
    root: null,
    rootMargin: `-150px`,
    threshold: 0
};

function stickyNavigation(entries) {
    let ent = entries[0];

    if (ent.isIntersecting === false) {
        navElement.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
        navElement.classList.remove("sticky");
    }
}

const observer = new IntersectionObserver(stickyNavigation, options);

observer.observe(headerElement);

const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const mobileNav = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", function () {
    mobileNav.style.display = "block";
});

closeIcon.addEventListener("click", function () {
    console.log("ohhhhh");
    mobileNav.style.display = "none";
});
