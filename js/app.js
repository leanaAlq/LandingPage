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

function createListItem(name) {
  let listItem = document.createElement("li");
  listItem.innerHTML = name;
  listItem.className = `${name.replace(/\s/g, "")}`;
  listItem.addEventListener("click", () => ScrollToSection(listItem.className));
  navBarList.appendChild(listItem);
}

function ScrollToSection(name) {
  const sectionId = name.toLowerCase();
  const section = document.querySelector(`#${sectionId}`);
  const sectionTop = section.offsetTop;
  SetActiveClass(sectionId);
  window.scrollTo({ top: sectionTop, behavior: "smooth" });
}

function SetActiveClass(ActivesectionId) {
  sections.forEach(
    (section) =>
      (section.className = section.id === ActivesectionId ? "active" : "")
  );
}
function createNav() {
  sections.forEach((section) => createListItem(section.dataset.nav));
}
createNav();
