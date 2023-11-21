// trang đăng nhập
function handleLogin(event) {
  event.preventDefault(); //ngăn chặn sự kiện mặc định của form
  const emailValue = document.querySelector(".email");
  const passwordValue = document.querySelector(".password");
  const mainData = JSON.parse(localStorage.getItem("users"));
  const userLogin = mainData.find((item, index) => {
    return (
      item.email == emailValue.value && item.password == passwordValue.value
    );
  });
  if (userLogin) {
    if (userLogin.status == 1) {
      console.log("123");
      alert("đăng nhập ok");
      window.location.href = "../../index.html";
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
    } else {
      alert("tài khoản đã bị khoá");
    }
  } else {
    alert("tài khoản hoặc mật khẩu không đúng");
  }
}
