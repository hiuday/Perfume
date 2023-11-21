function handleHeader() {
  const headerLogin = document.querySelector("#account-header");
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  if (userLogin) {
    headerLogin.innerHTML = `<span style=" cursor: pointer;" onclick="navitionInfo()">
    ${userLogin.fullName}
    </span> <a href="../index.html"><i onclick="handleLogout()" class="fa-solid fa-arrow-right-from-bracket"></i></a>`;
  } else {
    headerLogin.innerHTML = `
    <a href="http://127.0.0.1:5501/pages/login/login.html"><i class="ti-user"></i></a>
    `;
  }
}
function handleLogout() {
  localStorage.removeItem("userLogin");
  window.location.href = "../../index.html";
}
handleHeader();
function navitionInfo() {
  window.location.href = "http://127.0.0.1:5501/pages/history/history.html";
}
