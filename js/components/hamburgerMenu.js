

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav");
const menuNav = document.querySelector(".nav_links");
const navItem = document.querySelectorAll("li");
const logo = document.querySelector(".fas");


// menuNav.innerHTML += `<div class="cart-total">Total items in cart:${listItems.length}</div> `;

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    logo.style.display ="show";
    navItem.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}
