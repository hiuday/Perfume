const payments = [];

if (!JSON.parse(localStorage.getItem("payment"))) {
  localStorage.setItem("payment", JSON.stringify(payments));
}
