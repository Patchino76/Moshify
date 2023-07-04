const collapsibles = document.querySelectorAll('[class*="collapsible"]');
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    // this.classList.toggle("collapsible__chevron");
    // this.classList.toggle("collapsible__content");
    console.log("clicked");
  })
);

