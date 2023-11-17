//render user cart tăng giá tiền

function formProduct() {
  const UserLogin = JSON.parse(localStorage.getItem("userLogin")) || [];
  const UserDB = JSON.parse(localStorage.getItem("users")) || [];
  let result = "";
  console.log(UserLogin);
  console.log(UserDB);

  const renderCart = document.querySelector("#form_product");
  UserDB.forEach((element, index) => {
   
    if (element.email === UserLogin.email) {
      result = `   
    <div class="payment_product">
    <div class="title_product">
      <div class="img_product">
        <img src="../${element.img}" alt="" />
      </div>
      <div class="name_product">
        <p>${element.productName}</p>
        <p>10ml</p>
      </div>
      <div class="price_product">
        <span>Giá tiền</span>
      </div>
    </div>

    <div class="count_product">
      <div class="count">
        <span>Tạm tính</span>
        <span>giá tiền</span>
      </div>
      <div class="transport">
        <span>Phí vận chuyển</span>
        <span>0 Đồng</span>
      </div>
    </div>
    <div class="total">
      <span>Tổng cộng</span>
      <span>Giá tiền</span>
    </div>
  </div>
        `;
    }
  });

  //   UserLogin.carts.forEach((element, index) => {});
  renderCart.innerHTML = result;
}
function payMent() {
  const User = JSON.parse(localStorage.getItem("userLogin"));
  const inforUser = JSON.parse(localStorage.getItem("users"));
  const renderUser = document.querySelector(".form_user");
  inforUser.forEach((element) => {
    if (element.email === User.email) {
      renderUser.innerHTML = `
         
    <h5>Thông tin khách hàng</h5>
    <div id="input_name">
      <input value="${element.fullName}" type="text" placeholder="Họ và tên" />
    </div>
    <div id="input_tel">
      <input value="${element.email}" type="email" placeholder="Email" />
    </div>
    <div id="input_tel">
      <input type="email" placeholder="Số điện thoại" />
    </div>

    <div class="form_active">
      <div class="form_head">
        <input name="order" type="radio" />
        <label for="">Giao tận nơi</label>
      </div>
      <div class="form_content">
        <div class="form_body">
          <input type="text" placeholder="Địa chỉ" />
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
      <button>Tiếp tục tiến hành thanh toán</button>
    </div>

        `;
    }
  });
}
//render cả tên thông tin địa chỉ người đăng nhập
