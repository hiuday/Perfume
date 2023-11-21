//bước đầu tiên phải render các tên login

const User = JSON.parse(localStorage.getItem("userLogin"));
const inforUser = JSON.parse(localStorage.getItem("users"));
const renderUser = document.querySelector(".infor");
inforUser.forEach((element) => {
  if (element.email === User.email) {
    renderUser.innerHTML = `
          <li>Tên:  ${element.fullName}</li>
          <li>
            Email:  ${element.email}
            <button><i class="ti-pencil"></i></button>
          </li>
         
        `;
  }
});

//render lịch sử mua hàng

function totalPrice(data) {
  let result = 0;
  data.product.forEach((item) => {
    result += item.price * item.quantity;
  });
  return result;
}

function renderHistory() {
  const user = JSON.parse(localStorage.getItem("userLogin"));
  const payment = JSON.parse(localStorage.getItem("payment"));
  const historyBody = document.querySelector("#history-render");
  const result = payment.filter((item) => item.email == user.email);
  historyBody.innerHTML = "";

  result.forEach((item) => {
    historyBody.innerHTML += `
    <ul>
    <li>
        <p>Tên người mua</p>
        <p>${item.fullName}</p>
    </li>
    <li>
        <p>Địa chỉ</p>
        <p>${item.address}</p>
    </li>
 
    <li>
      <p>Tổng tiền:</p>
      <p>${totalPrice(item).toLocaleString() + "VND"}</p>
    </li>
  </ul>
    `;
  });
}
