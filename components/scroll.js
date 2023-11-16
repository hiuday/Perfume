// lấy chiều cao màn hình
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition >= 100) {
    const header = document.querySelector(".header_transparent");
    const firstHeader = document.querySelector("#topbar");
    header.style.display = "flex";
    header.style.margin = 0;
    header.style.background = "white";
    header.style.transition = "0.8s";
  } else {
    const header = document.querySelector(".header_transparent");
    const firstHeader = document.querySelector("#topbar");
    header.style.display = "flex";
    header.style.marginTop = "44px";
    header.style.background = "transparent";
  }
});
