const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const year = document.getElementById("year");
const currentYear = new Date().getFullYear();

year.textContent = currentYear;

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);
