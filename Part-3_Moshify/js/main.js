const collapsibles = document.querySelectorAll('[class*="collapsible"]');
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    console.log("clicked");
  })
);

