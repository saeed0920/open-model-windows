"use strict";

const modal = document.querySelector(".modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");

// const callFunAddClass = function (querySelector, nameclass) {
//   querySelector.classList.add(nameclass);
// };
// console.log(modal);
// console.log(btnShowModal);

// * function expression in addEventListener
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// *
// when user click btn : show modal and overlay

// !important 👇👇
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}
// when user click btnclosemodal : close model and overylay
btnCloseModal.addEventListener("click", closeModal);
// when user click overlay : close model and overlay
overlay.addEventListener("click", closeModal);
//! because clean code and better vs this code 👇

// when user press key Escpae : close modal
document.addEventListener("keydown", function (x) {
  if (x.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// // when user click icon ❌ : close model and overlay
// btnCloseModal.addEventListener("click", function () {
//   //   callFunAddClass(modal, "hidden"); // this code clean for 👇
//   //   //   modal.classList.add("hidden");
//   //   callFunAddClass(overlay, "hidden"); // this code clean for 👇
//   //   //   overlay.classList.add("hidden");
// });

// // when user click overlay : close model and overlay
// overlay.addEventListener("click", function () {
//   //   callFunAddClass(overlay, "hidden"); // this code clean for 👇
//   //   //   overlay.classList.add("hidden");
//   //   callFunAddClass(modal, "hidden"); //this code clean for 👇
//   //   //   modal.classList.add("hidden");
// });
