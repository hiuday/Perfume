function navitionDetail(params) {
  window.location.href = `
  http://127.0.0.1:5501/pages/detail/detail.html?id=${params}
  `;
}
function navitionPayment(params) {
  console.log(params);
  window.location.href = `
  http://127.0.0.1:5501/pages/payment/Payment.html?id=${params}
  `;
}


