function toggleNavigationBar() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector(".navigation-bar");
  nav.classList.toggle("hide-nav");
}
