

//định nghĩa kiểu dữ liệu và tạo dữ liệu mẫu
const users = [
    {
        id:1,
        fullName:"FullName",
        email:"email",
        password:"password",
        role:1 ,//Vai trò:1 là admin,2 là user
        status:1,//để check trạng thái=>1 là bth,2 là bị cấm
        carts:[{
            id:1,
            productName:tên ="tên sản phẩm",

        }],

    }
]
if (!JSON.parse(localStorage.getItem("users"))) {
    localStorage.setItem("users",JSON.stringify(users))
}