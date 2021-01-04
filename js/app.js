/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

window.onload = function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  setTimeout(function () {
    navLink1.classList.add("active-nav");
    navLink1.classList.remove("menu__link");
  }, 500);
};

const nav = document.getElementById("navbar__list");
const headerText = document.querySelectorAll("h2");
const navItemsDocFrag = document.createDocumentFragment();
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
let sectionNumber = 0;

function scroll1() {
  section1.scrollIntoView({
    behavior: "smooth",
  });
}
function scroll2() {
  section2.scrollIntoView({
    behavior: "smooth",
  });
}
function scroll3() {
  section3.scrollIntoView({
    behavior: "smooth",
  });
}

// Builds nav items and adds to ul
for (let i = 0; i < headerText.length; i++) {
  const navItem = document.createElement("li");
  const navItemLink = document.createElement("a");
  const listItem = headerText[i].textContent;
  sectionNumber += 1;

  navItemLink.textContent = listItem;
  navItemLink.setAttribute("class", "menu__link");
  navItemLink.setAttribute("style", "cursor: pointer");
  navItemLink.setAttribute("onclick", `scroll${i + 1}()`);
  navItem.appendChild(navItemLink);
  navItemsDocFrag.appendChild(navItem);
}
nav.appendChild(navItemsDocFrag);

const navLinks = [...document.querySelectorAll(".menu__link")];
const navLink1 = navLinks[0];
const navLink2 = navLinks[1];
const navLink3 = navLinks[2];

let section1Bound;
let section2Bound;
let section3Bound;

// Scroll event to update active section inside of setTimeout
setTimeout(function scrollEvent() {
  document.addEventListener("scroll", function () {
    section1Bound = section1.getBoundingClientRect();
    section2Bound = section2.getBoundingClientRect();
    section3Bound = section3.getBoundingClientRect();

    if (section1Bound.top >= 0 && section1Bound.top <= 100) {
      navLink1.classList.add("active-nav");
      navLink1.classList.remove("menu__link");
      navLink2.classList.remove("active-nav");
      navLink2.classList.add("menu__link");
      navLink3.classList.remove("active-nav");
      navLink3.classList.add("menu__link");

      if (section1.classList.contains("active")) {
        return;
      } else {
        section1.classList.add("active");
        section2.classList.remove("active");
        section3.classList.remove("active");
      }
    }
    if (section2Bound.top >= 0 && section2Bound.top <= 100) {
      navLink1.classList.remove("active-nav");
      navLink1.classList.add("menu__link");
      navLink2.classList.add("active-nav");
      navLink2.classList.remove("menu__link");
      navLink3.classList.remove("active-nav");
      navLink3.classList.add("menu__link");

      if (section2.classList.contains("active")) {
        return;
      } else {
        section1.classList.remove("active");
        section2.classList.add("active");
        section3.classList.remove("active");
      }
    }
    if (section3Bound.top >= 0 && section3Bound.top <= 100) {
      navLink1.classList.remove("active-nav");
      navLink1.classList.add("menu__link");
      navLink2.classList.remove("active-nav");
      navLink2.classList.add("menu__link");
      navLink3.classList.add("active-nav");
      navLink3.classList.remove("menu__link");

      if (section3.classList.contains("active")) {
        return;
      } else {
        section1.classList.remove("active");
        section2.classList.remove("active");
        section3.classList.add("active");
      }
    }
  });
}, 0);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Scroll to anchor ID using scrollTO event

// Add class 'active' to section when near top of viewport

// Scroll to section on link click

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Set sections as active
