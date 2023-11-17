const list = document.querySelectorAll(".list-item");
const content = document.querySelectorAll(".content");
//list = nodeList []

list.forEach((item, index) => {
  item.addEventListener("click", function () {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    content.forEach((item) => {
      item.classList.remove("active");
    });
    content[index].classList.add("active");
    item.classList.add("active");
  });
});

//render user
function renderUser() {
  const UserDB = JSON.parse(localStorage.getItem("users"));
  let UserElement = document.querySelector(".table_body_user");
  let result = "";
  UserDB.forEach((element, index) => {
    result += `
    <tr>
                <td>${index + 1}</td>
                <td>${element.email}</td>
                <td>${element.fullName}</td>
                <td>${element.address}</td>
                <td>${(element.status = 1
                  ? "Hoạt Động"
                  : "Ngừng hoạt động")}</td>
                <td>
                  <button id="View">view</button
                  ><button id="Block">block</button>
                </td>
              </tr>
    `;
  });
  UserElement.innerHTML = result;
}

renderUser();
function renderProduct() {
  const ProductDB = JSON.parse(localStorage.getItem("products"));
  let ProductElement = document.querySelector(".table_body_product");
  let result = "";
  ProductDB.forEach((element, index) => {
    result += `
    <tr>
                <td>${index + 1}</td>
                <td>PR_${element.id}</td>
                <td>${element.productName}</td>
                <td>${element.price}VND</td>
                <td>${element.stock}</td>
                <td>${element.quantity}</td>
                <td>
                  <button id="View">view</button
                  ><button id="Block">block</button>
                </td>
              </tr>
    `;
  });
  ProductElement.innerHTML = result;
}
renderProduct();

function renderOrder() {
  const orderDB = JSON.parse(localStorage.getItem("orders"));
  let OrderElement = document.querySelector(".table_body_order");
  let result = "";
  orderDB.forEach((element, index) => {
    result += `
    <tr>
    <td>${index + 1}</td>
    <td>ORDER_${element.orderID}</td>
    <td>${element.date}</td>
    <td>${element.userOrder}</td>
    <td>${element.total}</td>
    <td>${element.status}</td>
    <td>
      <button id="View">view</button
      ><button id="Block">edit</button>
    </td>
  </tr>
      `;
  });
  OrderElement.innerHTML = result;
}
renderOrder();
