"use strict";
// === set date in footer ===
const year = new Date().getFullYear().toString();
const footerDate = document.getElementById("footer__date");
// updates year found in <time>
footerDate.innerHTML = year;
// updates datetime attribute to match year
footerDate.setAttribute('datetime', year);
// === end set date in footer ===
// ==============================
// === set mobile nav ===
const navMobileToggle = document.querySelector(".nav__mobile-toggle");
const navMain = document.querySelector(".nav__main");
// setup slightly different from John's setup since I'm targeting the button for the action
// Also have styles setup different as well
navMobileToggle.addEventListener("click", () => {
    if (navMobileToggle.classList.contains("nav__mobile-toggle__active")) {
        navMain.classList.remove("nav__mobile-nav__show");
        navMobileToggle.classList.remove("nav__mobile-toggle__active");
    }
    else if (!navMobileToggle.classList.contains("nav__mobile-toggle__active")) {
        navMain.classList.add("nav__mobile-nav__show");
        navMobileToggle.classList.add("nav__mobile-toggle__active");
    }
});
// === end set mobile nav ===
// ==========================
// === fixed nav, top link ===
const headerFixed = document.querySelector(".header__outer-shell");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
    // checks scroll height
    // console.log(window.scrollY);
    const scrollHeight = window.scrollY;
    // checks height of header nav bar
    const headerHeight = headerFixed.getBoundingClientRect().height;
    if (scrollHeight > headerHeight) {
        headerFixed === null || headerFixed === void 0 ? void 0 : headerFixed.classList.add("nav__fixed");
    }
    else {
        headerFixed === null || headerFixed === void 0 ? void 0 : headerFixed.classList.remove("nav__fixed");
    }
    // top link show
    if (scrollHeight > 700) {
        topLink === null || topLink === void 0 ? void 0 : topLink.classList.add("top-link__show");
    }
    else {
        topLink === null || topLink === void 0 ? void 0 : topLink.classList.remove("top-link__show");
    }
});
// === end fixed nav, top link ===
// ===============================
// === smooth scroll ===
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        var _a;
        e.preventDefault();
        const target = e.currentTarget;
        // navigate to specific section, based on href, minus # symbol
        const navToSection = (_a = target.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.slice(1);
        if (navToSection) {
            const section = document.getElementById(navToSection);
            // calculate height of fixed header
            const headerHeight = headerFixed.getBoundingClientRect().height;
            // calculate height of nav "drop-down"
            const navHeight = navMain.getBoundingClientRect().height;
            // determines true of false if header is fixed
            const fixedNav = headerFixed.classList.contains("nav__fixed");
            let postionOfSection = section.offsetTop - headerHeight;
            // checks if there is no class of .nav__fixed on element
            if (!fixedNav) {
                postionOfSection = postionOfSection - headerHeight;
            }
            // checks if headerHeight is greater than 74px, if so, adds navHeight
            if (headerHeight > 74) {
                postionOfSection = postionOfSection + navHeight;
            }
            window.scrollTo({
                top: postionOfSection,
                left: 0,
            });
        }
        navMain.classList.remove("nav__mobile-nav__show");
        navMobileToggle.classList.remove("nav__mobile-toggle__active");
    });
});
// === end smooth scroll ===
// =========================
//# sourceMappingURL=main.js.map