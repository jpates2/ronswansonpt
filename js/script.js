const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick))

function onTabClick(e) {
  // Deactivate all tabs
  console.log(e.target);
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
