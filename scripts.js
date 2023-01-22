//Es lo que hace que la barra te persiga cuadno se la pase
//Tambien hace que cuando screoleas para abajo desaparezca

let ubicacionPrincipal = window.pageYOffset;
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 713) {
    let desplazamientoActual = window.pageYOffset;
    if (desplazamientoActual <= ubicacionPrincipal) {
      var navbar = this.document.querySelector("navbar");
      navbar.classList.remove("transicion");
      ubicacionPrincipal = desplazamientoActual;
    } else {
      var navbar = this.document.querySelector("navbar");
      navbar.classList.add("transicion");
      ubicacionPrincipal = desplazamientoActual;
    }
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset < 713) {
    var navbar = this.document.querySelector("navbar");
    navbar.classList.add("transicion");
  }
});
