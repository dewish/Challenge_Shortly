//* ANIMATION with Gsap the main content
gsap.from(".main__text", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 1.4,
  stragger: 0.6,
});
gsap.from(".illustration", { duration: 1, delay: 0.5, y: 30, opacity: 0 });

///////////////////////////////////////
// Pop up section for SIGN IN //

const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".signInModal");
const closeBtn = document.querySelector(".closeBtn");
const openBtn_mob = document.querySelector(".signInModal_mob");

function openPopup() {
  popup.style.display = "block";
}

function closeModal() {
  popup.style.display = "none";
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
openBtn_mob.addEventListener("click", openPopup);

// When the user clicks anywhere outside of the modal, close it
function outsideClick(e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
}

// GET MODAL ELEMENT FOR HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMob = document.querySelector(".nav__mobile");

// hamburger.addEventListener("click", () => {
//     navMob.classList.toggle("show");
// });

const openBurgerMenu = function () {
  navMob.classList.toggle("show");
};

hamburger.addEventListener("click", openBurgerMenu);
