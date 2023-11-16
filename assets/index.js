// lấy sản phẩm từ local stonge

function renderProduct(data) {
  console.log(data);
  const productsData = JSON.parse(localStorage.getItem("products"));
  // tạo biến get đến thẻ cha của sản phẩm

  const listProducts = document.querySelector("#product");
  console.log("123", productsData);
  //b3:dùng vòng lặp forEach
  listProducts.innerHTML = "";

  if (data == "All") {
    productsData.forEach(function (item, index) {
      if (index < 4) {
        listProducts.innerHTML += `
      <figure onclick="navitionDetail(${item.id})">
      <div class="img_product" style=" background-image: url('${item.img}');">
        <p>xem chi tiết</p>
      </div>
      <figcaption>
        <p>${item.productName}</p>
        <p>${item.price}</p>
      </figcaption>
    </figure>
      `;
      }
    });
  } else {
    let dataRender = productsData.filter((item) => item.catagory == data); //tìm theo thuộc tính catagory
    console.log(data);
    dataRender.forEach(function (item, index) {
      if (index < 4) {
        listProducts.innerHTML += `
      <figure onclick="navitionDetail(${item.id})">
      <div class="img_product" style=" background-image: url('${item.img}');">
        <p>xem chi tiết</p>
      </div>
      <figcaption>
        <p>${item.productName}</p>
        <p>${item.price}</p>
      </figcaption>
    </figure>
      `;
      }
    });
  }
}

// sản phẩm ưu đãi

// lấy sản phẩm từ local stonge

function renderProduct1(data) {
  console.log(data);
  const productsData1 = JSON.parse(localStorage.getItem("products"));
  // tạo biến get đến thẻ cha của sản phẩm

  const listProducts1 = document.querySelector("#product1");
  console.log("123", productsData1);
  //b3:dùng vòng lặp forEach
  listProducts1.innerHTML = "";

  if (data == "All") {
    productsData1.forEach(function (item, index) {
      if (index < 4) {
        listProducts1.innerHTML += `
      <figure onclick="navitionDetail(${item.id})">
      <div class="img_product" style=" background-image: url('${item.img}');">
        <p>xem chi tiết</p>
      </div>
      <figcaption>
        <p>${item.productName}</p>
        <p>${item.price}</p>
      </figcaption>
    </figure>
      `;
      }
    });
  } else {
    let dataRender1 = productsData1.filter((item) => item.catagory == data); //tìm theo thuộc tính catagory
    console.log(data);
    dataRender1.forEach(function (item, index) {
      if (index < 4) {
        listProducts1.innerHTML += `
      <figure onclick="navitionDetail(${item.id})">
      <div class="img_product" style=" background-image: url('${item.img}');">
        <p>xem chi tiết</p>
      </div>
      <figcaption>
        <p>${item.productName}</p>
        <p>${item.price}</p>
      </figcaption>
    </figure>
      `;
      }
    });
  }
}

// render giỏ hàng
