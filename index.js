// GET MODAL ELEMENT
const modal = document.getElementById("popup");
// GET MODAL OPEN BUTTOM
const modalBtn = document.getElementById("modalBtn");
// GET MODAL CLOSE BUTTOM
const closeBtn = document.getElementsByClassName("closeBtn")[0];

// LISTEN FOR OPEN CLICK
modalBtn.addEventListener("click", openModal);
// LISTEN FOR CLOSE CLICK
closeBtn.addEventListener("click", closeModal);
//LISTEN FOR OUTSIDE CLICK
window.addEventListener("click", outsideClick);


// FUNCTION TO OPEN MODAL
function openModal() {
    modal.style.display = 'block';
}


// FUNCTION TO CLOSE MODAL
function closeModal() {
    modal.style.display = 'none';
}

// FUNCTION TO CLOSE MODAL IF OUTSIDE CLICK
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
   
}

// GET MODAL ELEMENT FOR HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav__mobile");

// Hamburger menu on small screens open X close
hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
})





//* ANIMATION with Gsap the main content
gsap.from(".main__text", { opacity: 0, duration: 1, y: -50, delay: 1.4, stragger: 0.6 })
gsap.from('.illustration', { duration: 1, delay: 0.5, y: 30, opacity: 0 })



