const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick))

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove("border-b-4", "border-pink")
  })

  // Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate a new tab and panel based on target
  e.target.classList.contains("flex") ? e.target.children[0].classList.add("border-b-4", "border-pink") : e.target.classList.add("border-b-4", "border-pink");
  const classString = e.target.getAttribute("data-target");
  document.getElementById("panels").getElementsByClassName(classString)[0].classList.remove("hidden");
}


// FAQs

const faqContainers = document.querySelectorAll(".faq-cont");
const faqContent = document.querySelectorAll(".faq-content");

faqContainers.forEach((container) => container.addEventListener("click", onFAQClick))

function onFAQClick (e) {
  // Open this FAQ
  const content = e.target.closest(".faq-cont").querySelector(".faq-content");
  content.classList.toggle("max-h-screen");
  content.classList.toggle("max-h-0");

  // Arrow rotate
  const arrow = e.target.closest(".faq-cont").querySelector(".arrow");
  arrow.classList.toggle("rotate180")
}


// Hamburger menu

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const menuItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", navToggle);
menuItem.forEach((item) => item.addEventListener("click", navToggle))

function navToggle() {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function navClose() {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  menuBtn.classList.toggle("open");
}
