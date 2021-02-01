import displayByCategory from './displayByCategory.js';
import getData from './getData.js';
const displayMenu = async () => {
const ulWrapper = document.querySelector('.ul-category');
    // Dynamically added manu
    const data =await getData();
   
    const categories =  [...new Set(data.map((item) => item.category))].flat();
    const uniqueCategories =   ['all',...new Set(categories.map((item) => item))];
    //Displays menu
    console.log(uniqueCategories);
    uniqueCategories.map((item)=>{
        ulWrapper.innerHTML+=`<li data-category='${item}'>${item} Beds</li>`;
    });
    uniqueCategories.map((item)=>{
        
        document.querySelector(`[data-category='${item}']`).addEventListener('click',()=>{
            
            displayByCategory(item);
        });
    });
    

    


}
export default displayMenu;