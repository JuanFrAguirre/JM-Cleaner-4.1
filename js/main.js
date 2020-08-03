// navegacion

const navBtn = document.querySelector(".nav-btn");
const navBar = document.querySelector(".contenedor-navegacion");

function openNavBar() {
  navBtn.addEventListener("click", () => {
    navBar.classList.toggle("activo");
    navBtn.classList.toggle("cruzar");
  });
}

openNavBar();

// mapa

var map = L.map("mapid").setView([-31.410237, -64.199145], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-31.410237, -64.199145])
  .addTo(map)
  .bindPopup("Aca tenes que elegir donde estan las farmacias, Hugo.")
  .openPopup();

// tiki que mueve los ojos
let ojo = document.querySelector(".ojo");
document.onmousemove = () => {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";

  ojo.style.left = x;
  ojo.style.top = y;
  ojo.style.transform = "translate(-" + x + "%, -" + y + "%)";
};
