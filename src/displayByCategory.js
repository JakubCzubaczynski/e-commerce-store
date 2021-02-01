
import getData from "./getData.js";
import displayPaginationContent from './displayPaginationContent.js'
import search from './filter/search.js';
import buttonsHoverUtils from './buttonsHoverUtils.js';
//display products and add events listeners
const displayByCategory = async (category) => {


    const data = await getData();

    const categoryContent = data.filter((item) => {
        if (category === item.category[0] || category === 'all') {
            return item;
        }
    });
    displayPaginationContent(categoryContent);

    search(categoryContent);

    buttonsHoverUtils();
    
    document.querySelector('.path-content').innerHTML = `home / products / ${category}`;     



    







}

export default displayByCategory;