// trang đăng ký
//biểu mẫu đăng ký

function handleRegister(event) {
  event.preventDefault(); //ngăn chặn sự kiện mặc định của form
  const nameValue = document.querySelector(".fullName");
  const genderValue = document.querySelector(".gender");
  const dateValue = document.querySelector(".date");
  const emailValue = document.querySelector(".email");
  const passwordValue = document.querySelector(".password");
  const buttonValue = document.querySelector(".button_login");
  const mainData = JSON.parse(localStorage.getItem("users"));
  const checkEmail = mainData.find((item) => item.email == emailValue.value);
  if (checkEmail) {
    return alert("Email đã tồn tại");
  } else {
    const newUser = {
      id: mainData[mainData.length - 1].id + 1,
      fullName: nameValue.value,
      email: emailValue.value,
      password: passwordValue.value,
      gender: genderValue.value == 1 || genderValue.value == 2,
      birthday: dateValue.value,
      role: 2,
      status: 1,
      carts: [],
    };
    console.log(newUser);
    mainData.push(newUser);
    localStorage.setItem("users", JSON.stringify(mainData));
    alert("đăng ký thành công");
    window.location.href = "../login/login.html";
  }

  //   sau khi đẩy lên local thành công reset lại các ô input
  document.querySelector(".fullName").value = "";
  document.querySelector(".gender").value = "";
  document.querySelector(".date").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".password").value = "";
}
