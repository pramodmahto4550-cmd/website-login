const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".links .close-btn");

showPopupBtn.addEventListener("click",() => {
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

menuBtn.addEventListener("click", () => {
    document.querySelector(".navbar").classList.add("show-menu");
});

closeBtn.addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("show-menu");
});

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});