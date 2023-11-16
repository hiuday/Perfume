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
              <input type="text" disabled/>
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
function addToCart() {
  let addProduct = document.querySelector("#push_cart");
  console.log(addProduct, "add cart");
  const productsData = JSON.parse(localStorage.getItem("products")) || [];

  const itemProduct = productsData.filter((element) => {
    return (element.id = idProductDetail);
  });

  let userCart = JSON.parse(localStorage.getItem("users")) || [];
  let userLogin = JSON.parse(localStorage.getItem("userLogin")) || [];

  const indexUserCart = userCart.findIndex((element) => {
    return element.email, userLogin.email;
  });
  
}

renderDetail();
