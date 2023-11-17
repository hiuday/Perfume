//render giỏ hàng
function RenderCart() {
  const UserLogin = JSON.parse(localStorage.getItem("userLogin"));
  let result = "";
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
