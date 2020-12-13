import { baseUrl } from "./settings/api.js";
import createHtmlProducts from "./components/createHtmlProducts.js";
import searchData from "./components/searchData.js";
import displayMessage from "./components/displayMessage.js";
import createAdminMenu from "./components/createAdminMenu.js";


createAdminMenu();

const productsUrl = baseUrl + "products";




async function callApi() {
  
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    const product = json;
    
    

    createHtmlProducts (product);
    searchData(product);
    

  
  } catch (error) {
    displayMessage("error", error,".container_products");
    console.log(error);
  }



}
callApi();