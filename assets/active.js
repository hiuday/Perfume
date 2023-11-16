const list = document.querySelectorAll(".list_item");
//list = nodeList []

list.forEach((item, index) => {
  item.addEventListener("click", function () {
    console.log(122);
    list.forEach((item) => {
      item.classList.remove("active");
    });
    let data = item.getAttribute("data-content");
    console.log(data);
    item.classList.add("active");
    renderProduct(data);
  });
});

// sản phẩm ưu đãi
const list1 = document.querySelectorAll(".list_item1");
//list = nodeList []

list1.forEach((item, index) => {
  item.addEventListener("click", function () {
    console.log(122);
    list1.forEach((item) => {
      item.classList.remove("active1");
    });
    let data = item.getAttribute("data-content");
    console.log(data);
    item.classList.add("active1");
    renderProduct1(data);
  });
});
