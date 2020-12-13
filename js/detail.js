import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import createAdminMenu from "./components/createAdminMenu.js";

createAdminMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;


(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();
    document.title = details.title;

    const container = document.querySelector(".container_product-detail");
   

    const listItems = getFromStorage("list");
    const doesObjectExist = listItems.find(function(product) {
      
      return parseInt(product.id) === details.id
    });
    
    console.log("doesObjectExist", doesObjectExist)

  
    
    
    
    container.innerHTML = "";

    container.innerHTML += `
    <button type="button" class="btn back">
            <a href="products.html#products">Back to products</a>
          </button>
    <div class="container_product-detail_item">
    <h1>${details.title}</h1>
    
    <div class="img-container">
    <img src="http://localhost:1337${details.image.url}" class="img"/>
    </div>

    <div class="product-info">
    <p> ${details.description} </p>
    <p>Price: ${details.price}</p>
    <button type="button" id="addToCart" class="btn" data-id="${details.id}">
        
        </button>
    </div>
    
    </div>
    `;

    const button = document.querySelector(
      ".container_product-detail_item button");
      if(doesObjectExist) {
      
        button.innerHTML = "Remove Item from cart";
      }else {
        button.innerHTML = "Add Item to cart";
      }

    button.addEventListener("click", handleClick);

    function handleClick() {
      

      const listItems = getFromStorage("list");
      const id = details.id;

      const productExist = listItems.find(function (product) {
        return product.id === id;
      });

      if (productExist === undefined) {
        const newItem = details;

        listItems.push(newItem);

        saveToStorage("list", listItems);

        button.innerHTML = "Remove Item from cart";
      } else {
        button.innerHTML = "Add Item to cart";
        const newArr = listItems.filter((product) => product.id !== id);
        saveToStorage("list", newArr);
      }
    }
  } catch (error) {
    displayMessage("error", error, ".container_product-detail");
  }
})();
