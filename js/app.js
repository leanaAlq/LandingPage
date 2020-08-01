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

const sections = document.querySelectorAll("section");
const navBarList = document.querySelector("#navbar__list");
const body = document.querySelector("body");
function createListItem(id, name) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.href = `#${id}`;
  anchor.innerHTML = name;
  anchor.className = "link";
  const className = name[0].toLowerCase() + name.slice(1);
  listItem.className = `${className.replace(/\s/g, "")}`;
  listItem.appendChild(anchor);
  navBarList.appendChild(listItem);
}

function createNav() {
  sections.forEach((section) =>
    createListItem(section.id, section.dataset.nav)
  );
}

function SetActiveClass(ActivesectionId) {
  console.log(ActivesectionId);
  let navElements = document.querySelectorAll("#navbar__list li");

  sections.forEach((section) => {
    if (!section.className.includes("active")) {
      section.className =
        section.id === ActivesectionId && !section.className.includes("active")
          ? "active"
          : "";
    }
  });
  navElements.forEach((element) => {
    // if (!element.className.includes("active")) {
    element.className =
      element.className.includes(ActivesectionId) &&
      !element.className.includes("active")
        ? `${element.className} active`
        : element.className.replace("active", "");
    // }
  });
}

function SmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      SetActiveClass(this.getAttribute("href").substr(1));
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

createNav();
SmoothScroll();

window.onscroll = function (e) {
  sections.forEach((section) => {
    if (
      window.scrollY >
      section.offsetTop + (section.clientHeight - window.outerHeight)
    ) {
      SetActiveClass(section.id);
    }
  });
};
