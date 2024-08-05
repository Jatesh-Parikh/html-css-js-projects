const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  //   console.log(e.target);
  if (e.target === modal) {
    closeModal();
  }
}

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
