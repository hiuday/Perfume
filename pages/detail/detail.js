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
              <input value="${item.quantity}" type="text" disabled/>
            </div>
            <div class="payment">
              <button onclick="addToCart(${item.id})" id="push_cart">thêm vào giỏ</button>
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
// function buyNow(params) {
//   const checkUserLogin = JSON.parse(localStorage.getItem("userLogin"));
//   if (!checkUserLogin) {
//     return alert("Vui lòng đăng nhập để thêm vào giỏ hàng");
//   }
//   addToCart(idProductDetail);
//   navitionPayment(params);
// }
// add vào userlogin
function addToCart(id) {
  console.log(id, "aaa");
  const checkUserLogin = JSON.parse(localStorage.getItem("userLogin"));
  if (!checkUserLogin) {
    alert("Vui lòng đăng nhập để thêm vào giỏ hàng");
    window.location.href = "http://127.0.0.1:5501/pages/login/login.html";
  }
  const userLoginDB = JSON.parse(localStorage.getItem("userLogin"));
  const userDB = JSON.parse(localStorage.getItem("users"));
  const productDB = JSON.parse(localStorage.getItem("products"));
  // const user = userDB.find((item) => item.id == userLoginDB.id);
  const product = productDB.find((item) => item.id == id);
  // const userCart = user.carts;
  // userCart.push(product);

  let checkUser = userDB.findIndex((item) => item.id == userLoginDB.id);
  if (checkUser != -1) {
    const cart = userDB[checkUser].carts;
    let checkProduct = cart.findIndex((item) => item.id == id);
    if (checkProduct != -1) {
      let result = cart.map((item, index) => {
        if (index == checkProduct) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      console.log(result);
      userDB[checkUser].carts = result;
      localStorage.setItem("users", JSON.stringify(userDB));
    } else {
      userDB[checkUser].carts.push({
        ...product,
        quantity: 1,
      });
    }
    localStorage.setItem("users", JSON.stringify(userDB));
  }
  // let userCart = JSON.parse(localStorage.getItem("users")) || [];
  // // let userLogin = JSON.parse(localStorage.getItem("userLogin")) || [];
  // const productsData = JSON.parse(localStorage.getItem("products")) || [];

  // const itemProduct = productsData.find((element) => {
  //   return element.id == id;
  // });

  // const indexUserCart = userCart.findIndex((element) => {
  //   return element.email == userLogin.email;
  // });
  // const checkCart = userCart[indexUserCart].carts.find((item) => item.id == id);

  //  add to cart tại vị trí indexUserCart
  // nếu chưa có sản phẩm nào trong giỏ hàng thì thêm mới
  // nếu có rồi mà trùng id thì tăng số lượng quantity, không trùng thì thêm mới
  // đẩy vào localstorage

  //  if (checkCart == -1) {

  //     userCart[indexUserCart].carts.push(itemProduct);
  //     localStorage.setItem("users", JSON.stringify(userCart));
  //   } else {
  //     const indexProduct = userCart[indexUserCart].carts.findIndex(
  //       (element) => element.id == idProductDetail
  //     );
  //     if (indexProduct == -1) {
  //       console.log("có sản phẩm ko trùng id");
  //       userCart[indexUserCart].carts.push({
  //         id: itemProduct[0].id,
  //         img: itemProduct[0].img,
  //         productName: itemProduct[0].productName,
  //         price: itemProduct[0].price,
  //         quantity: 1,
  //       });
  //     } else {
  //       console.log("sản phẩm trùng id");
  //       userCart[indexUserCart].carts[indexProduct].quantity++;
  //     }
  //   }

  // userCart.splice(indexUserCart, 1, itemProduct[0]);

  //tìm vị trí của obj sau đó thay thế thành obj mới và lưu lại vào bộ nhớ
  // của anh bình
  // const indexUser = userDB.findIndex((item) => item.id == userLoginDB.id);
  // userDB[indexUser] = user;
  // localStorage.setItem("users", JSON.stringify(userDB));
  RenderCart();
}

// render vào cart
function RenderCart() {
  const userCart = JSON.parse(localStorage.getItem("users")) || [];
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || [];
  const userRenderCart = userCart.filter((element) => {
    return element.id == userLogin.id;
  });
  let result = "";
  const renderCart = document.querySelector(".product");
  userRenderCart[0].carts.forEach((element, index) => {
    console.log(element, "element");
    result += `   
    <ul style="margin-top:40px">
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
    <p>Số lượng:</p>
    <input value="${element.quantity}" class="show" type="text" disabled />
    </li>
    <li>
      <p>Đơn giá:</p>
      <p>${element.price.toLocaleString() + "VND"}</p>
    </li>
    <li>
      <p>Thành tiền</p>
      <p>${(element.price * element.quantity).toLocaleString() + "VND"}</p>
      </li>
      <button onclick="deleteProductCart(${index})" class="icon_trash"><i class="ti-trash"></i></button>
  </ul>
  <hr />
  <div class="btn_pay-showcart">
    <span><button onclick="navitionPayment(${
      element.id
    })" class="pay">thanh toán</button></span>
  </div>
    `;
  });

  renderCart.innerHTML = result;
}
RenderCart();
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
