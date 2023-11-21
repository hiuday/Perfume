const list = document.querySelectorAll(".list-item");
const content = document.querySelectorAll(".content");
//list = nodeList []
let indexGloble;
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
// active của thanh điều hướng

//render user
function renderUser() {
  const UserDB = JSON.parse(localStorage.getItem("users"));
  const AdminDB = JSON.parse(localStorage.getItem("admin"));
  let UserElement = document.querySelector(".table_body_user");
  let adminElement = document.querySelector(".table-body-admin");
  let result = "";
  UserDB.forEach((element, index) => {
    result += `
    <tr>
                <td>${index + 1}</td>
                <td>${element.email}</td>
                <td>${element.fullName}</td>
                <td>${
                  element.status == 1 ? "Hoạt Động" : "Ngừng hoạt động"
                }</td>
                <td>
                ${
                  element.status == 1
                    ? `<button id="View">Block</button
                >`
                    : ""
                }
                ${
                  element.status == 2
                    ? `<button id="View">Unblock</button
                >`
                    : ""
                }
                  
                </td>
              </tr>
    `;
  });
  UserElement.innerHTML = result;

  adminElement.innerHTML = "";
  AdminDB.forEach((element, index) => {
    adminElement.innerHTML += `
    <tr>
    <td>${index + 1}</td>
    <td>${element.email}</td>
  </tr>
    `;
  });
}
//phần renderUser

function renderProduct() {
  const ProductDB = JSON.parse(localStorage.getItem("products")) || [];
  let ProductElement = document.querySelector(".table_body_product");
  let result = "";
  ProductDB.forEach((element, index) => {
    result += `
    <tr>
                <td>${index + 1}</td>
                <td>PR_${element.id}</td>
                <td>${element.productName}</td>
                <td>
                  <img width='100' src=${element.img} />
                </td>
                <td>${element.price}VND</td>
                <td>${element.stock}</td>
                <td>
                  <button class="viewProduct" id="View" onclick="showModalEdit(${index})">Edit</button>
                  <button onclick="deleteProduct(${index})" id="Block">Xoá</button>
                </td>
              </tr>
    `;
  });
  ProductElement.innerHTML = result;
}
function showModalAdd() {
  document.querySelector("#modal-add").style.position = "fixed";
  document.querySelector("#modal-add").style.right = "0";
  document.querySelector("#modal-add").style.top = "0";
  document.querySelector("#modal-add").style.left = "0";
  document.querySelector("#modal-add").style.transition = "0.5s";
}

function cancelModalAdd() {
  document.querySelector("#modal-add").style.top = "-100%";
  document.querySelector("#modal-add").style.transition = "0.5s";
}

function addProduct() {
  const ProductDB = JSON.parse(localStorage.getItem("products")) || [];
  const name = document.querySelector("#add-name-product");
  const price = document.querySelector("#add-price-product");
  const stock = document.querySelector("#add-stock-product");
  const image = document.querySelector("#add-image-product");
  const catagory = document.querySelector("#add-catagory-product");
  valueImg = `../assets/img/${image.files[0].name}`;
  // name.value =
  // price.value =
  // stock.value=
  const newData = {
    id: ProductDB.length > 0 ? ProductDB[ProductDB.length - 1].id + 1 : 1,
    productName: name.value,
    price: price.value,
    stock: stock.value,
    quantity: 1,
    isDelete: 1,
    img: valueImg,
    desc: " mô tả",
    catagory: catagory.value,
  };
  ProductDB.push(newData);
  localStorage.setItem("products", JSON.stringify(ProductDB));
  renderProduct();
  cancelModalAdd();
}

function showModalEdit(index) {
  document.querySelector("#modal").style.position = "fixed";
  document.querySelector("#modal").style.right = "0";
  document.querySelector("#modal").style.top = "0";
  document.querySelector("#modal").style.left = "0";
  document.querySelector("#modal").style.transition = "0.5s";

  const name = document.querySelector("#name_Product");
  const price = document.querySelector("#price_Product");
  const stock = document.querySelector("#stock_Product");
  const ProductDB = JSON.parse(localStorage.getItem("products"));

  name.value = ProductDB[index].productName;
  price.value = ProductDB[index].price;
  stock.value = ProductDB[index].stock;
  indexGloble = index;
  console.log(indexGloble);
  // save.on = editProduct(index);
}
//nút lưu

const closeModal = document.querySelector(".cancel");
// showModal.forEach((item) => {
//   item.addEventListener("click", function () {
//     document.querySelector("#modal").style.position = "fixed";
//     document.querySelector("#modal").style.right = "0";
//     document.querySelector("#modal").style.top = "0";
//     document.querySelector("#modal").style.left = "0";
//     document.querySelector("#modal").style.transition = "0.5s";
//   });
// });

function cancel() {
  document.querySelector("#modal").style.top = "-100%";
  document.querySelector("#modal").style.transition = "0.5s";
}

function renderOrder() {
  const orderDB = JSON.parse(localStorage.getItem("payment")) || [];
  let OrderElement = document.querySelector(".table_body_order");
  let result = "";
  orderDB.forEach((element, index) => {
    result += `
    <tr>
    <td>${index + 1}</td>
    <td>ORDER_${element.address}</td>
    <td>${element.email}</td>
    <td>${element.fullName}</td>
    <td>${element.tel}</td>
    <td>
      <button id="View">view</button
      ><button id="Block">edit</button>
    </td>
  </tr>
      `;
  });
  OrderElement.innerHTML = result;
}

// delete sản phẩm
function deleteProduct(index) {
  const mainData = JSON.parse(localStorage.getItem("products"));

  let newData;
  let choice = confirm("bạn có muốn xoá hay không");
  if (choice == true) {
    newData = mainData.filter(function (item, i) {
      return index != i;
    });
  } else {
    return index;
  }
  localStorage.setItem("products", JSON.stringify(newData));
  renderProduct();
}
// edit sản phẩm
function editProduct() {
  console.log("gfgf");
  let index = indexGloble;
  console.log(indexGloble, "indexGloble");
  const mainData = JSON.parse(localStorage.getItem("products"));
  const name = document.querySelector("#name_Product");
  const price = document.querySelector("#price_Product");
  const stock = document.querySelector("#stock_Product");
  const myInputName = name.value;
  const myInputStock = price.value;
  const myInputPrice = stock.value;
  const newData = mainData.map(function (item, i) {
    if (index == i) {
      console.log({
        ...item,
        productName: myInputName,
        price: myInputPrice,
        stock: myInputStock,
      });
      return {
        ...item,
        productName: myInputName,
        price: myInputPrice,
        stock: myInputStock,
      };
    } else {
      console.log("đã vào");
      return item;
    }
  });
  localStorage.setItem("products", JSON.stringify(newData));

  renderProduct();
  cancel();
}
// render phần dashboard
function renderDashboard() {
  const userDB = JSON.parse(localStorage.getItem("users"));
  const productDB = JSON.parse(localStorage.getItem("products"));
  const orderDB = JSON.parse(localStorage.getItem("payment"));

  let userInner = document.querySelector("#user-length");
  let productInner = document.querySelector("#product-length");
  let orderInner = document.querySelector("#order-length");

  userInner.innerHTML = userDB.length;
  productInner.innerHTML = productDB.length;
  orderInner.innerHTML = orderDB.length;
}

//block tài khoản
// function editUser(id) {
//   let usersDB = JSON.parse(localStorage.getItem("users"));
//   let findUser =
// }

function searchProduct() {
  console.log("đã vào");
  const valueInput = document.querySelector("#search_input_product");
  const ProductDB = JSON.parse(localStorage.getItem("products")) || [];

  const tableProduct = ProductDB.filter((item, index) => {
    return item.productName
      .toLowerCase()
      .includes(valueInput.value.toLowerCase());
  });
  let ProductElement = document.querySelector(".table_body_product");
  let result = "";
  tableProduct.forEach((element, index) => {
    result += `
    <tr>
                <td>${index + 1}</td>
                <td>PR_${element.id}</td>
                <td>${element.productName}</td>
                <td>
                  <img width='100' src=${element.img} />
                </td>
                <td>${element.price}VND</td>
                <td>${element.stock}</td>
                <td>
                 search
                </td>
              </tr>
    `;
  });
  ProductElement.innerHTML = result;
}
