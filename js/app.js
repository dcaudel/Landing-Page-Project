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

// Reset page on refresh: Scrolls to top, and selects section 1 in nav
window.onload = function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  setTimeout(function () {
    navLinks[0].classList.add("active-nav");
    navLinks[0].classList.remove("menu__link");
  }, 500);
};

const nav = document.getElementById("navbar__list");
const headerText = document.querySelectorAll("h2");
const navItemsDocFrag = document.createDocumentFragment();
const allSections = document.querySelectorAll("section");

// Builds nav items and adds to ul
for (let i = 0; i < headerText.length; i++) {
  const navItem = document.createElement("li");
  const navItemLink = document.createElement("a");
  const listItem = headerText[i].textContent;

  navItemLink.textContent = listItem;
  navItemLink.setAttribute("class", "menu__link");
  navItemLink.setAttribute("style", "cursor: pointer");
  //   navItemLink.setAttribute("onclick", `scroll${i + 1}()`);
  navItemLink.setAttribute("data-nav", `Section ${i + 1}`);
  navItem.appendChild(navItemLink);
  navItemsDocFrag.appendChild(navItem);
}
nav.appendChild(navItemsDocFrag);

// Helper Functions

//Checks if any portion of a section is visible.
// *** Got some help online for this one ***
function isVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

// Checks if top of section is near top of viewport
function headerNearTop(el) {
  const rect = el.getBoundingClientRect();
  const headerNearTop = rect.top >= -300 && rect.top <= 400;

  return headerNearTop;
}

const navLinks = document.querySelectorAll(".menu__link");

// Scroll event to update active section inside of setTimeout
setTimeout(function scrollEvent() {
  document.addEventListener("scroll", function () {
    for (section of allSections) {
      if (headerNearTop(section)) {
        for (navLink of navLinks) {
          if (
            navLink.getAttribute("data-nav", `Section ${navLink + 1}`) ===
            section.getAttribute("data-nav", `Section ${navLink + 1}`)
          ) {
            navLink.classList.add("active-nav");
            navLink.classList.remove("menu__link");
          } else {
            if (
              navLink.getAttribute("data-nav", `Section ${navLink + 1}`) !==
              section.getAttribute("data-nav", `Section ${navLink + 1}`)
            ) {
              navLink.classList.add("menu__link");
              navLink.classList.remove("active-nav");
            }
          }
        }
      }
      if (isVisible(section)) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    }
  });
}, 0);

// click event for nav item to scroll section into view
nav.addEventListener("click", function (evt) {
  const navData = evt.target.getAttribute("data-nav");
  let sectionData = "";
  for (section of allSections) {
    sectionData = section.getAttribute("data-nav");

    if (navData === sectionData) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
});
