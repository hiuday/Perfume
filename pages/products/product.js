function renderProduct(data) {
  const productsData = JSON.parse(localStorage.getItem("products"));
  // tạo biến get đến thẻ cha của sản phẩm

  const listProducts = document.querySelector("#product");
  const titleProduct = document.querySelector(".title_product");
  const navProduct = document.querySelector(".nav_header");
  //b3:dùng vòng lặp forEach
  navProduct.innerHTML = "";
  titleProduct.innerHTML = "";
  listProducts.innerHTML = "";
  if (data == "All") {
    productsData.forEach(function (item, index) {
      if (index < 4) {
        listProducts.innerHTML += `
      <figure onclick="navitionDetail(${item.id})">
      <div class="img_product" style=" background-image: url('../${item.img}');">
        <p>xem chi tiết</p>
      </div>
      <figcaption>
        <p>${item.productName}</p>
        <p>${item.price}</p>
      </figcaption>
    </figure>
      `;
      console.log(item.id,"idđ");
      }
    });
  } else {
    let dataRender = productsData.filter((item) => item.catagory == data); //tìm theo thuộc tính catagory
    dataRender.forEach(function (item, index) {
      titleProduct.innerHTML = `
    <h3>${item.catagory}</h3>`;
      navProduct.innerHTML = `
    <a href="#">${item.catagory}</a>
    `;
      if (index < 4) {
        listProducts.innerHTML += `
      <figure onclick="navitionDetail(${item.id})">
      <div class="img_product" style=" background-image: url('../${item.img}');">
        <p>xem chi tiết</p>
      </div>
      <figcaption>
        <p>${item.productName}</p>
        <p>${item.price}</p>
      </figcaption>
    </figure>
      `;
      console.log(item.id,"âdd");
      }
    });
  }
}

