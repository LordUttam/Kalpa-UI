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
