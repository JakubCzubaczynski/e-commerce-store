const updateTotalAmount = (amount) => {
  const totalAmount = document.querySelector('.cart-count');
  totalAmount.innerHTML = amount;
};
export default updateTotalAmount;
