//render user cart tăng giá tiền

function formProduct() {
  const UserLogin = JSON.parse(localStorage.getItem("userLogin")) || [];
  const UserDB = JSON.parse(localStorage.getItem("users")) || [];
  let result = "";
  let provisional = 0;
  const renderCart = document.querySelector("#form_product");
  UserDB.forEach((element, index) => {
    if (element.email === UserLogin.email) {
      console.log(element.carts, "cart");
      element.carts.forEach((item) => {
        result += `   
        <div class="payment_product">
        <div class="title_product">
          <div class="img_product">
            <img src="../${item.img}" alt="" />
          </div>
          <div class="name_product">
            <p>${item.productName}</p>
            <p>Số lượng: ${item.quantity}</p>
          </div>
          <div class="price_product">
            <span>Giá tiền:${item.price}VNĐ</span>
          </div>
        </div>
      </div>
            `;
        provisional = provisional + item.price * item.quantity;
      });
    }
  });

  //   UserLogin.carts.forEach((element, index) => {});
  result =
    result +
    `
  <div class="count_product">
  <div class="count">
    <span>Tạm tính</span>
    <span>${provisional}VNĐ</span>
  </div>
  <div class="transport">
    <span>Phí vận chuyển</span>
    <span>0 Đồng</span>
  </div>
</div>
<div class="total">
  <span>Tổng cộng</span>
  <span>${provisional}VNĐ</span>
</div>
  `;
  renderCart.innerHTML = result;
}
function payMent() {
  const User = JSON.parse(localStorage.getItem("userLogin"));
  console.log(User, "userlogin");
  const inforUser = JSON.parse(localStorage.getItem("users"));
  const renderUser = document.querySelector(".form_user");
  inforUser.forEach((element) => {
    if (element.email === User.email) {
      console.log(element, "111");
      renderUser.innerHTML = `
         
    <h5>Thông tin khách hàng</h5>
    <div id="input_name">
      <input class="name" value="${element.fullName}" type="text" placeholder="Họ và tên" />
    </div>
    <div id="input_tel">
      <input class="address" value="${element.email}" type="email" placeholder="Email" />
    </div>
    <div id="input_tel">
      <input  class="tel" type="tel" placeholder="Số điện thoại" />
    </div>

    <div class="form_active">
      <div class="form_head">
        <input name="order" type="radio" />
        <label for="">Giao tận nơi</label>
      </div>
      <div class="form_content">
        <div class="form_body">
          <input  class="address" type="text" placeholder="Địa chỉ" />
        </div>
       
      </div>
    </div>
    <div class="form_active">
      <div class="form_head">
        <input name="order" type="radio" />
        <label for="">Nhận tại cửa hàng</label>
      </div>
      <div class="form_content">
        <p>Hiện tại cửa hàng không có</p>
      </div>
    </div>

    <div class="form_submit">
      <button type="submit">Tiến hành thanh toán</button>
    </div>

        `;
    }
  });
}

//render cả tên thông tin địa chỉ người đăng nhập

// thêm dữ liệu vào từ ô input số điện thoại và địa chỉ
function addList(event) {
  event.preventDefault();
  const User = JSON.parse(localStorage.getItem("userLogin"));
  const inforUser = JSON.parse(localStorage.getItem("users"));
  const renderUser = document.querySelector(".form_user");
  const cartPayment = inforUser.find((element) => {
    return User.email == element.email;
  });

  const nameUser = document.querySelector(".name");
  const myNameUser = nameUser.value;
  const emailUser = document.querySelector(".address");
  const myEmailUser = emailUser.value;
  const tel = document.querySelector(".tel");
  const address = document.querySelector(".address");
  const myTel = tel.value;
  const myAddress = address.value;
  let newData = {
    tel: myTel,
    address: myAddress,
    fullName: myNameUser,
    email: myEmailUser,
    product: cartPayment.carts,
  };

  const payment = JSON.parse(localStorage.getItem("payment")) || [];
  console.log(payment, "alo");
  payment.push(newData);
  localStorage.setItem("payment", JSON.stringify(payment));
  // đẩy dữ liệu newdata vào maindata
  // mainData.push(newData);
  // localStorage.setItem("users", JSON.stringify(mainData));
  inforUser.map((element, index) => {
    if (element.email == User.email) {
      inforUser[index].carts.length = 0;
    }
  });
  localStorage.setItem("users", JSON.stringify(inforUser));
  formProduct();
}
