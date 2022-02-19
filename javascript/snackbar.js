const snackbar = document.querySelectorAll(".snackbar");
const snackbarLeading = document.querySelectorAll(".snackbar--leading")[0];
const snackbarStacked = document.querySelectorAll(".snackbar--stacked")[0];
const snackbarTrailing = document.querySelectorAll(".snackbar--trailing")[0];
const snackbarBaseline = document.querySelectorAll(".snackbar--baseline")[0];
const leadingBtn = document.querySelector("#leadingBtn");
const baselineBtn = document.querySelector("#baselineBtn");
const trailingBtn = document.querySelector("#trailingBtn");
const stackedBtn = document.querySelector("#stackedBtn");

const cancelLeading = document.querySelector(
  ".snackbar--leading .snackbar__cancel"
);
const cancelTrailing = document.querySelector(
  ".snackbar--trailing .snackbar__cancel"
);
const cancelBaseline = document.querySelector(
  ".snackbar--baseline .snackbar__cancel"
);
const cancelStacked = document.querySelector(
  ".snackbar--stacked .snackbar__cancel"
);

leadingBtn.addEventListener("click", () => {
  for (let i of snackbar) {
    i.classList.remove("snackbarActive");
    console.log(i);
  }
  snackbarLeading.classList.add("snackbarActive");
});

trailingBtn.addEventListener("click", () => {
  for (let i of snackbar) {
    i.classList.remove("snackbarActive");
    console.log(i);
  }
  snackbarTrailing.classList.add("snackbarActive");
});

baselineBtn.addEventListener("click", () => {
  for (let i of snackbar) {
    i.classList.remove("snackbarActive");
    console.log(i);
  }
  snackbarBaseline.classList.add("snackbarActive");
});

stackedBtn.addEventListener("click", () => {
  for (let i of snackbar) {
    i.classList.remove("snackbarActive");
    console.log(i);
  }
  snackbarStacked.classList.add("snackbarActive");
});

cancelLeading.addEventListener("click", () => {
  snackbarLeading.classList.remove("snackbarActive");
});

cancelTrailing.addEventListener("click", () => {
  snackbarTrailing.classList.remove("snackbarActive");
});

cancelBaseline.addEventListener("click", () => {
  snackbarBaseline.classList.remove("snackbarActive");
});

cancelStacked.addEventListener("click", () => {
  snackbarStacked.classList.remove("snackbarActive");
});
