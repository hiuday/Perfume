//định nghĩa kiểu dữ liệu và tạo dữ liệu mẫu và đây là dữ liệu của khách hàng có cart
const users = [
  {
    id: 1,
    fullName: "Admin",
    email: "admin@gmail.com",
    password: "12345",
    gender: 1, //1 là nam 2 là nữ
    birthday: "", //ngày sinh nhật của khách
    role: 2, //Vai trò:1 là admin,2 là user
    status: 1, //để check trạng thái=>1 là bth,2 là bị cấm
    carts: [],
  },
];
if (!JSON.parse(localStorage.getItem("users"))) {
  localStorage.setItem("users", JSON.stringify(users));
}
