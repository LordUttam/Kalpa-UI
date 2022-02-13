var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.querySelectorAll(".header--std")[0].style.top = "0";
    } else {
      document.querySelectorAll(".header--std")[0].style.top = `-135px`;
    }
    prevScrollPos = currentScrollPos;
  };
};

// drawer link active
let links = document.querySelectorAll(".drawer__sidebar--perm ul li");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

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
