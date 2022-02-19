// ratings
const ratingUnits = document.querySelectorAll(".rating__unit");

for (var j = 0; j < ratingUnits.length; j++) {
  ratingUnits[j].addEventListener("click", function () {
    // let allUnfilledUnits = ratingUnits.querySelectorAll(".rating__unit");
    var filled = document.getElementsByClassName("fill");
    if (filled.length > 0) {
      filled[0].className = filled[0].className.replace(" fill", "");
    }
    this.className += " fill";
  });
}
