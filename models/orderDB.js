const orders = [
  {
    orderID:1,
    date:"16/11/2023",
    userOrder: "người mua",
    total:111,
    status:1,//nếu để 1 thì đang vận chuyển,2 đã giao hàng,
  }
];

if (!JSON.parse(localStorage.getItem("orders"))) {
  localStorage.setItem("orders", JSON.stringify(orders));
}
