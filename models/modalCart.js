const showCart = document.querySelector(".ti-shopping-cart");
const closeCart = document.querySelector(".closeCart");

showCart.addEventListener("click", function () {
  document.querySelector("#cart").style.position = "fixed";
  document.querySelector("#cart").style.right = "0";
  document.querySelector("#cart").style.top = "0";

  // document.querySelector("body").style.position = "fixed";
  // document.querySelector("body").style.top = "0";
  // document.querySelector("body").style.right = "0";
  // document.querySelector("body").style.left = "0";
  // document.querySelector("body").style.bottom = "0";
  // document.querySelector("body").style.background = "black";
});
closeCart.addEventListener("click", function () {
  document.querySelector("#cart").style.right = "-100%";
});




