var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 30) {
      // going up
      document.querySelectorAll(".header--fixed")[0].classList.remove("flip");
      document
        .querySelectorAll(".header__logo img")[0]
        .setAttribute("src", "./assets/kalpa-white.png");
    } else if (currentScrollPos > 30) {
      // going down
      document.querySelectorAll(".header--fixed")[0].classList.add("flip");
      document
        .querySelectorAll(".header__logo img")[0]
        .setAttribute("src", "./assets/kalpa-purple.png");
    }
    prevScrollPos = currentScrollPos;
  };
};
