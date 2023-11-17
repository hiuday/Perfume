//render giỏ hàng
function RenderCart() {
  const UserLogin = JSON.parse(localStorage.getItem("userLogin"));
  let result = "";
  console.log(UserLogin);
  const renderCart = document.querySelector(".product");
  UserLogin.carts.forEach((element, index) => {
    result += `   
      <ul>
      <li>
        <a href="#"
          ><img src="../${element.img}" alt=""
        /></a>
      </li>
      <li>
        <a href="trang chủ">
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
// function renderBill() {
//   const UserLogin = JSON.parse(localStorage.getItem("userLogin"));
//   const Bill = document.querySelector(".cart_infor");
//   let result = "";
//   console.log(UserLogin, "login");
//   UserLogin.carts.forEach((element, index) => {
//     result = `<div class="infor_title">
//     <h5>Thông tin đơn hàng</h5>
//   </div>
//   <div class="infor_price">
//     <span>Tổng tiền:</span>
//     <span>${element.price * element.quantity}</span>
//   </div>
//   <div class="pay">
//     <button>THANH TOÁN</button>
//   </div>
//   <div class="continue">
//     <a href="#">Tiếp tục mua hàng <i class="ti-arrow-right"></i></a>
//   </div>

//     `;
//   });
//   Bill.innerHTML = result;
// }
