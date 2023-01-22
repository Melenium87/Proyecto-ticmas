window.addEventListener("scroll", function () {
  if (window.pageYOffset > 713) {
    var navbar = this.document.querySelector("navbar");
    navbar.classList.remove("transicion");
  }
});
window.addEventListener("scroll", function () {
  if (window.pageYOffset < 713) {
    var navbar = this.document.querySelector("navbar");
    navbar.classList.add("transicion");
  }
});
