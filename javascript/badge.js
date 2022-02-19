//badge hide

let hideBadge = (e) => {
  if (badgeToHide.style.display === "none") {
    badgeToHide.style.display = "inline-block";
  } else {
    badgeToHide.style.display = "none";
  }
};

let hideButton = document.querySelectorAll(".hide-badge")[0];
let badgeToHide = document.querySelectorAll(".badge--hide")[0];
hideButton.addEventListener("click", hideBadge);
