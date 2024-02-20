// === set date in footer ===
const year = new Date().getFullYear().toString();
const footerDate = document.getElementById("footer__date") as HTMLTimeElement;

// updates year found in <time>
footerDate.innerHTML = year;
// updates datetime attribute to match year
footerDate.setAttribute('datetime', year);

// === end set date in footer ===
// ==============================


// === set mobile nav ===
const navMobileToggle = document.querySelector(".nav__mobile-toggle") as HTMLElement;
const navMain = document.querySelector(".nav__main") as HTMLElement;

// setup slightly different from John's setup since I'm targeting the button for the action
// Also have styles setup different as well
navMobileToggle.addEventListener("click", () => {
  if (navMobileToggle.classList.contains("nav__mobile-toggle__active")) {
    navMain.classList.remove("nav__mobile-nav__show");
    navMobileToggle.classList.remove("nav__mobile-toggle__active");
  } else if (!navMobileToggle.classList.contains("nav__mobile-toggle__active")) {
    navMain.classList.add("nav__mobile-nav__show");
    navMobileToggle.classList.add("nav__mobile-toggle__active");
  }
});

// === end set mobile nav ===
// ==========================


// === fixed nav, top link ===
const headerFixed = document.querySelector(".header__outer-shell") as HTMLElement;
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  // checks scroll height
  // console.log(window.scrollY);
  const scrollHeight = window.scrollY;
  // checks height of header nav bar
  const headerHeight = headerFixed.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    headerFixed?.classList.add("nav__fixed");
  } else {
    headerFixed?.classList.remove("nav__fixed");
  }

  // top link show
  if (scrollHeight > 700) {
    topLink?.classList.add("top-link__show");
  } else {
    topLink?.classList.remove("top-link__show");
  }
  
});

// === end fixed nav, top link ===
// ===============================


// === smooth scroll ===
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    // navigate to specific section, based on href, minus # symbol
    const navToSection = target.getAttribute("href")?.slice(1);
    if (navToSection) {
      const section = document.getElementById(navToSection) as HTMLElement;
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
