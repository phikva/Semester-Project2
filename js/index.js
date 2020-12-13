import { baseUrl } from "./settings/api.js";
import createHtmlFeaturedProducts from "./components/createHtmlFeaturedProducts.js";
import createAdminMenu from "./components/createAdminMenu.js";
const productsUrl = baseUrl + "products";
const homeUrl = baseUrl + "home";


createAdminMenu();
async function callApi() {
  

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    const product = json;
    

    createHtmlFeaturedProducts (product);
    

  
  } catch (error) {
    console.log(error);
  }
  const heroContainer = document.querySelector(".hero-section");
  try {
    const response = await fetch(homeUrl);
    const json = await response.json();
    const product = json;

    heroContainer.innerHTML = 
    heroContainer.innerHTML += `
    <img src="http://localhost:1337${product.hero_banner.url}" class="hero-img"/>
    `;

    

    console.log(product.hero_banner.url);

  } catch (error) {
    console.log(error);
  }



}
callApi();
