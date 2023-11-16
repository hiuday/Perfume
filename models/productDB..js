//định nghĩa kiểu dữ liệu và tạo dữ liệu mẫu
const products = [
  {
    id: 1,
    productName: "Another13",
    price: 1111,
    Quantity: 1, //số lượng
    stock: 1111, //tồn kho
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/another13.jpg", // [""]
    desc: "mô tả",
    catagory: "Lelabo",
  },
  {
    id: 2,
    productName: "Santal33",
    price: 1111, //giá cả
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/Santal33.jpg", // [""]
    desc: "mô tả", //còn mua được hay không
    catagory: "Lelabo",
  },
  {
    id: 3,
    productName: "Thenoir29",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/thenoir29.jpg", // [""]
    desc: "mô tả",
    catagory: "Lelabo",
  },
  {
    id: 4,
    productName: "Vetiver46",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/Vetiver46.jpg", // [""]
    desc: "mô tả",
    catagory: "Lelabo",
  },
  {
    id: 5,
    productName: "Dior Sauvage Nam",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nuoc_hoa_dior_sauvage.webp", // [""]
    desc: "mô tả",
    catagory: "Dior Sauvage",
  },
  {
    id: 6,
    productName: "Dior Homme",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/dior-homme.webp", // [""]
    desc: "mô tả",
    catagory: "Dior Sauvage",
  },
  {
    id: 7,
    productName: "Dior Joy",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nuoc_hoa_dior_joy.webp", // [""]
    desc: "mô tả",
    catagory: "Dior Sauvage",
  },
  {
    id: 8,
    productName: "Miss Dior",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/miss_dior_edt_100ml.webp", // [""]
    desc: "mô tả",
    catagory: "Dior Sauvage",
  },
  {
    id: 9,
    productName: "Laura Anne Diamond Pour Homme Nam",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nuoc-hoa-nam-laura-anne-diamond-pour-homme-45ml-nau-6-1654756830.jpg", // [""]
    desc: "mô tả",
    catagory: "Diamond Femme",
  },
  {
    id: 10,
    productName: "Laura Anne Diamond Pour Homme Nữ",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nuoc-hoa-nu-laura-anne-diamond-femme.jpg", // [""]
    desc: "mô tả",
    catagory: "Diamond Femme",
  },
  {
    id: 11,
    productName: "Diamond Homme Dark Blue",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/Diamond_dark_blue.jpg", // [""]
    desc: "mô tả",
    catagory: "Diamond Femme",
  },
  {
    id: 12,
    productName: "Laura Anne Diamond Pour Homme",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/dior-homme.webp", // [""]
    desc: "mô tả",
    catagory: "Diamond Femme",
  },
  {
    id: 13,
    productName: "YSL Le Parfum",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nuoc-hoa-nam-ysl-le-parfum.webp", // [""]
    desc: "mô tả",
    catagory: "YSL",
  },
  {
    id: 14,
    productName: "YSL Black Opium",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nuoc-hoa-nu-YSL-black-opium.webp", // [""]
    desc: "mô tả",
    catagory: "YSL",
  },
  {
    id: 15,
    productName: "YSL Saint Lauren",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nuoc-hoa-nu-YSL-saint-laurent.webp", // [""]
    desc: "mô tả",
    catagory: "YSL",
  },
  {
    id: 16,
    productName: "Nước hoa nữ YSL",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nuoc-hoa-nu-YSL.webp", // [""]
    desc: "mô tả",
    catagory: "YSL",
  },
  {
    id: 17,
    productName: "Nến thơm Mệnh Hoả",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nenthomhoa.webp", // [""]
    desc: "mô tả",
    catagory: "Nến Thơm",
  },
  {
    id: 18,
    productName: "Nến thơm Mệnh Kim",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nenthomkim.webp", // [""]
    desc: "mô tả",
    catagory: "Nến Thơm",
  },
  {
    id: 19,
    productName: "Nến Thơm Thổ",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nenthomtho.jpg", // [""]
    desc: "mô tả",
    catagory: "Nến Thơm ",
  },
  {
    id: 20,
    productName: "Nến Thơm Mộc",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nenthommoc.webp", // [""]
    desc: "mô tả",
    catagory: "Nến Thơm",
  },
  {
    id: 21,
    productName: "Sữa tắm Lemon",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/BST_Lumin_Lemon.png", // [""]
    desc: "mô tả",
    catagory: "Sữa tắm",
  },
  {
    id: 22,
    productName: "Sữa tắm loại 1",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/BST_Lumin.png", // [""]
    desc: "mô tả",
    catagory: "Sữa tắm",
  },
  {
    id: 23,
    productName: "Sữa tắm loại 2",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 1, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/BST_Lumin_Sea.png", // [""]
    desc: "mô tả",
    catagory: "Sữa tắm",
  },
  {
    id: 24,
    productName: "Nến Thơm Lyli",
    price: 1111,
    stock: 1111, //tồn kho
    Quantity: 1, //số lượng
    isDelete: 2, //kĩ thuật soft delete:là kĩ thuật xoá mềm.Nếu đặt đk bằng 1 thì còn sử dụng,đặt bằng 2 thì sẽ là xoá tạm thời
    img: "../assets/img/nenthomLyli.webp", // [""]
    desc: "mô tả",
    catagory: "Nến Thơm",
  },
];
if (!JSON.parse(localStorage.getItem("products"))) {
  localStorage.setItem("products", JSON.stringify(products));
}
