const headerElement = document.querySelector("#header");
const navElement = document.querySelector(".nav");
let options = {
    root: null,
    rootMargin: "-96px",
    threshold: 0
};

function stickyNavigation(entries) {
    let ent = entries[0];

    if (ent.isIntersecting === false) {
        console.log("adding");
        navElement.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
        console.log("removing");
        navElement.classList.remove("sticky");
    }
}

const observer = new IntersectionObserver(stickyNavigation, options);

observer.observe(headerElement);
