const updateTotalAmount = (amount) => {
  console.log('total:', amount);
  const totalAmount = document.querySelector('.cart-count');
  totalAmount.innerHTML = amount;
};
export default updateTotalAmount;
