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

function createListItem(id, name) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.href = `#${id}`;
  anchor.innerHTML = name;
  anchor.className = "link";
  listItem.className = `${name.replace(/\s/g, "")}`;
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
  sections.forEach(
    (section) =>
      (section.className = section.id === ActivesectionId ? "active" : "")
  );
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
// detect scrolling
window.onscroll = function (e) {};
