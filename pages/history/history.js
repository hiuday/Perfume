//bước đầu tiên phải render các tên login

const User = JSON.parse(localStorage.getItem("userLogin"));
const inforUser = JSON.parse(localStorage.getItem("users"));
const renderUser = document.querySelector(".infor");
inforUser.forEach((element) => {
  if (element.email === User.email) {
    renderUser.innerHTML = `
          <li>Tên:${element.fullName}</li>
          <li>
            Email: ${element.email}
            <button><i class="ti-pencil"></i></button>
          </li>
          <li>
            Mật Khẩu:<input type="password" value="${element.password}">  <button><i class="ti-pencil"></i></button>
          </li>
        `;
  }
});
