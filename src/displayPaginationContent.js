import buttonsHoverUtils from './buttonsHoverUtils.js';
const displayPaginationContent = (content) => {
  const itemsPerPage = 9;
  const numOfPages = Math.ceil(content.length / 10);
  const btnWrapper = document.querySelector('.pagination-btn-wrapper');
  const wrapper = document.querySelector('.products-wrapper');

  const displayPaginationBtns = (array) => {
    btnWrapper.innerHTML = '';
    if (array.length > 1) {
      array.map((_, index) => {
        btnWrapper.innerHTML += `<button class="pagination-btn">${
          index + 1
        }</button>`;
      });
    }
  };
  const utilsPaginationBtn = () => {
    const btns = [...document.querySelectorAll('.pagination-btn')];
    btns.map((item, index) => {
      item.addEventListener('click', () => {
        displayPage(index);
        buttonsHoverUtils();
      });
    });
  };
  const displayPage = (id) => {
    wrapper.innerHTML = '';
    newContent[id].map((item) => {
      const { id, title, category, description, image, price } = item;

      wrapper.innerHTML += `
                <div class="pad-5 col-md-12 col-lg-6 col-xl-4 product">
                    <div class="img-wrapper">
                        <img src="${image}" data-id='${id}' class="product-img" alt="">
                        <div class='product-icons'>
                            <button data-id="${id}" class="basket"><i class="fas fa-shopping-cart"></i></button>
                            <a href="product.html"><button data-id="${id}" class="info"><i class="fas fa-info"></i></button></a>
                        </div>
                    </div>
                    <p class="product-name">${title}</p>
                    <p class="product-price">$${price}</p>
                </div>
            `;
    });
  };

  const newContent = Array.from({ length: numOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return content.slice(start, start + itemsPerPage);
  });

  displayPage(0);
  displayPaginationBtns(newContent);
  utilsPaginationBtn();
};
export default displayPaginationContent;
