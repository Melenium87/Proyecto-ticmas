//Es lo que hace que la barra te persiga cuadno se la pase
//Tambien hace que cuando screoleas para abajo desaparezca
const navbar = this.document.querySelector("navbar");
let ubicacionPrincipal = window.pageYOffset;
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 713) {
    navbar.classList.remove("transicion");
    let desplazamientoActual = window.pageYOffset;
    if (desplazamientoActual <= ubicacionPrincipal) {
      navbar.style.top = "0px";
      ubicacionPrincipal = desplazamientoActual;
    } else {
      navbar.style.top = "-100px";
      ubicacionPrincipal = desplazamientoActual;
    }
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset < 713) {
    navbar.classList.add("transicion");
  }
});
