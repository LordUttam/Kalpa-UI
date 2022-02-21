const mobileMenu = document.querySelector(".menu--mobile");
const sidebarBtn = document.querySelector(".sidebar-btn");
const mobileMenuLinks = document.querySelectorAll(".menu--mobile ul li a");

sidebarBtn.addEventListener("click", () => {
  if (mobileMenu.style.display == "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
});

for (let mobLink = 0; mobLink < mobileMenuLinks.length; mobLink++) {
  mobileMenuLinks[mobLink].addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
}
