const params = new URLSearchParams(document.location.search);
const idProductDetail = params.get("id");
function renderDetail() {
  // lấy id của sản phẩm
  // get lấy mảng
  const productsData = JSON.parse(localStorage.getItem("products"));
  let listProducts = document.querySelector(".product_show");

  listProducts.innerHTML = "";

  productsData.forEach(function (item, index) {
    if (idProductDetail == item.id) {
      listProducts.innerHTML = `
    <div class="img_product">
            <img src="../${item.img}" alt="" />
          </div>
          <div class="content_product">
            <div id="title_product">
              <h1>${item.productName}</h1>
            </div>
            <div id="price_product">
              <span id="sale">10%</span>
              <span id="price">${item.price}</span>
              <span id="ofter_sale">số tiền được giảm giá</span>
            </div>
            <div id="size_product">
              <button onclick="">10ml</button>
              <button onclick="">50ml</button>
              <button onclick="">100ml</button>
            </div>
            <div id="up_down_product">
              <button onclick="" id="down">-</button>
              <input value="${item.quantity}" type="text" disabled/>
              <button onclick="" id="up">+</button>
            </div>
            <div class="payment">
              <button onclick="addToCart()" id="push_cart">thêm vào giỏ</button>
              <button id="buy_now">mua ngay</button>
            </div>
            <div id="review">
              <h1>mô tả</h1>
              <p>
               ${item.desc}
              </p>
            </div>
          </div>
    `;
    }
  });
}
// add vào userlogin
function addToCart() {
  let addProduct = document.querySelector("#push_cart");
  console.log(addProduct, "add cart");
  const productsData = JSON.parse(localStorage.getItem("products")) || [];

  const itemProduct = productsData.filter((element) => {
    return element.id == idProductDetail;
  });
  console.log(itemProduct);

  let userCart = JSON.parse(localStorage.getItem("users")) || [];
  let userLogin = JSON.parse(localStorage.getItem("userLogin")) || [];

  const indexUserCart = userCart.findIndex((element) => {
    return element.email == userLogin.email;
  });

  //  add to cart tại vị trí indexUserCart
  // nếu chưa có sản phẩm nào trong giỏ hàng thì thêm mới
  // nếu có rồi mà trùng id thì tăng số lượng quantity, không trùng thì thêm mới
  // đẩy vào localstorage

  if (indexUserCart == -1) {
    console.log("chưa có sản phẩm");
    userCart.push({
      email: userLogin.email,
      carts: [
        {
          id: itemProduct[0].id,
          img: itemProduct[0].img,
          productName: itemProduct[0].productName,
          price: itemProduct[0].price,
          quantity: 1,
        },
      ],
    });
  } else {
    const indexProduct = userCart[indexUserCart].carts.findIndex(
      (element) => element.id == idProductDetail
    );
    if (indexProduct == -1) {
      console.log("có sản phẩm ko trùng id");
      userCart[indexUserCart].carts.push({
        id: itemProduct[0].id,
        img: itemProduct[0].img,
        productName: itemProduct[0].productName,
        price: itemProduct[0].price,
        quantity: 1,
      });
    } else {
      console.log("sản phẩm trùng id");
      userCart[indexUserCart].carts[indexProduct].quantity++;
    }
  }
  userCart.splice(idProductDetail, 1, itemProduct[0]); //dùng splice ddeer gửi vào lại 
  console.log(userCart,"gửi đúng");
  localStorage.setItem("users", JSON.stringify(userCart));
  RenderCart();
}

// render vào cart
function RenderCart() {
  const userCart = JSON.parse(localStorage.getItem("users")) || [];
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || [];
  const userRenderCart = userCart.filter((element) => {
    return element.id == userLogin.id;
  });
  console.log(userRenderCart, "12312312");
  let result = "";
  const renderCart = document.querySelector(".product");
  userRenderCart[0].carts.forEach((element, index) => {
    result += `   
    <ul>
    <li> 
      <a href="#"
        ><img src="../${element.img}" alt=""
      /></a>
    </li>
    <li>
      <a href="#">
        <p>${element.productName}</p>
        <p>10ml</p></a
      >
    </li>
    <li>
      <button onclick="" class="down">-</button>
    <input value="${element.quantity}" class="show" type="text" disabled />
      <button onclick="" class="up">+</button>
    </li>
    <li>${element.price}</li>
    <li>
      <p>Thành tiền</p>
      <p>${element.price * element.quantity}</p>
      <button onclick="deleteProductCart(${index})" class="icon_trash"><i class="ti-trash"></i></button>
    </li>
  </ul>
  
    `;
  });
  renderCart.innerHTML = result;
}
//hàm xoá sản phẩm trong cart
function deleteProductCart(index) {
  const userCart = JSON.parse(localStorage.getItem("users")) || [];
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || [];
  userCart.forEach((element) => {
    if (element.email == userLogin.email) {
      element.carts.splice(index, 1);
    }
  });

  // const indexUserCart = userCart[0].carts.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(userCart));
  RenderCart();
}

renderDetail();
