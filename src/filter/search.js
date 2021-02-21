import buttonsHoverUtils from './../buttonsHoverUtils.js';
import displayPaginationContent from './../displayPaginationContent.js';
const search = (categoryContent) => {
  // RANGE FILTER
  const rangeInput = document.querySelector('.price-filter');
  rangeInput.value = 700;
  rangeInput.addEventListener('input', () => {
    document.getElementById('search').value = '';
    document.querySelector(
      '.range-value'
    ).innerHTML = `Value: $${rangeInput.value}`;
    console.log(rangeInput.value);
    const filtered = categoryContent.filter((item) => {
      if (item.price <= rangeInput.value) return item;
    });
    if (filtered.length > 0) {
      displayPaginationContent(filtered);

      buttonsHoverUtils();
    } else {
      document.querySelector('.products-wrapper').innerHTML =
        '<h3>Sorry, No Products Matched Your Search</h3>';
    }
  });
  //SEARCH FILTER
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('keyup', () => {
    document.querySelector('.price-filter').value = 700;
    const filtered = categoryContent.filter((item) => {
      const text = item.title.toLowerCase();

      if (text.includes(searchInput.value)) return item;
    });
    console.log(filtered);
    if (filtered.length > 0) {
      displayPaginationContent(filtered);

      buttonsHoverUtils();
    } else {
      document.querySelector('.products-wrapper').innerHTML =
        '<h3>Sorry, No Products Matched Your Search</h3>';
    }
  });
};

export default search;
