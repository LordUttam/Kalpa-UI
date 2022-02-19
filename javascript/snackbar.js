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
    i.classList.remove("snackbar--active");
    console.log(i);
  }
  snackbarLeading.classList.add("snackbar--active");
});

trailingBtn.addEventListener("click", () => {
  for (let i of snackbar) {
    i.classList.remove("snackbar--active");
    console.log(i);
  }
  snackbarTrailing.classList.add("snackbar--active");
});

baselineBtn.addEventListener("click", () => {
  for (let i of snackbar) {
    i.classList.remove("snackbar--active");
    console.log(i);
  }
  snackbarBaseline.classList.add("snackbar--active");
});

stackedBtn.addEventListener("click", () => {
  for (let i of snackbar) {
    i.classList.remove("snackbar--active");
    console.log(i);
  }
  snackbarStacked.classList.add("snackbar--active");
});

cancelLeading.addEventListener("click", () => {
  snackbarLeading.classList.remove("snackbar--active");
});

cancelTrailing.addEventListener("click", () => {
  snackbarTrailing.classList.remove("snackbar--active");
});

cancelBaseline.addEventListener("click", () => {
  snackbarBaseline.classList.remove("snackbar--active");
});

cancelStacked.addEventListener("click", () => {
  snackbarStacked.classList.remove("snackbar--active");
});
