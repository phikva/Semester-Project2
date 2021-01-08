import { getUsername } from "../utils/storage.js";
import createAdminMenu from "./createAdminMenu.js";

createAdminMenu();

export default function createHtmlProducts(json) {
  const ProductContainer = document.querySelector(".container_products");

  ProductContainer.innerHTML = "";

  json.forEach(function (product) {
    const format = new Intl.NumberFormat("no-NO", {
      style: "currency",
      currency: "NOK",
    }).format(product.price);
    
    if(getUsername()) {
      ProductContainer.innerHTML += `
      <div class="container_item">
      <div class="img-container">
      <img src="http://localhost:1337${product.image.url}" class="img"/>
      <a class="product" href="edit.html?id=${product.id}">
       <h3>${product.title}</h3>
      </a
      <p>Price: ${format}</p>
      </div>
      
      
      </div>
      `;
    } else  {
      ProductContainer.innerHTML += `
            <div class="container_item">
            <div class="img-container">
            <img src="http://localhost:1337${product.image.url}" class="img"/>
            <a class="product" href="detail.html?id=${product.id}">
             <h3>${product.title}</h3>
            </a
            <p>Price: ${format}</p>
            </div>
            
            
            </div>
            `;
    } 

    
  });
}
