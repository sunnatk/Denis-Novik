let button = document.querySelector(".burger");
let close = document.querySelector(".close");
let list_container = document.querySelector(".list_container");

let navhome = document.querySelector(".navhome");
let navabout = document.querySelector(".navabout");
let navskills = document.querySelector(".navskills");
let navportfolio = document.querySelector(".navportfolio");
let navcontacts = document.querySelector(".navcontacts");

button.addEventListener("click", function () {
  list_container.classList.remove("d-none");
});

close.addEventListener("click", function () {
  list_container.classList.add("d-none");
});

navhome.addEventListener("click", function () {
  list_container.classList.add("d-none");
});

navabout.addEventListener("click", function () {
  list_container.classList.add("d-none");
});

navskills.addEventListener("click", function () {
  list_container.classList.add("d-none");
});

navportfolio.addEventListener("click", function () {
  list_container.classList.add("d-none");
});

navcontacts.addEventListener("click", function () {
  list_container.classList.add("d-none");
});
