const nav = document.querySelector("ol");
const menu = document.querySelector(".hamburger");

nav.classList.add("animated");
menu.addEventListener("click", function () {
  nav.classList.toggle("transition");
});

const search = document.querySelector(".search");
const shop = document.querySelector(".shop");

search.addEventListener("click", function () {
  alert(`fitur belum tersedia`);
});

shop.addEventListener("click", function () {
  alert(`fitur belum tersedia`);
});
