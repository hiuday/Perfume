const admin = [
  {
    email: "admin@gmail.com",
    password: "admin",
  },
];
if (!JSON.parse(localStorage.getItem("admin"))) {
  localStorage.setItem("admin", JSON.stringify(admin));
}

function handleLoginAdmin(event) {
  event.preventDefault(); //ngăn chặn sự kiện mặc định của form
  const emailValue = document.querySelector(".email");
  const passwordValue = document.querySelector(".password");
  const mainData = JSON.parse(localStorage.getItem("admin"));
  const AdminLogin = mainData.find((item, index) => {
    return (
      item.email == emailValue.value && item.password == passwordValue.value
    );
  });
  if (AdminLogin) {

    alert("đăng nhập thành công");
    window.location.href = "../index.html";
  } else {
    alert("Sai mật khẩu hoặc tài khoản");
  }
}

function navigation() {
 
    window.location.href = "./login/login.html";
  
}
