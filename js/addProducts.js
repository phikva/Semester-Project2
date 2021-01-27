import displayMessage from "./components/displayMessage.js";
import { baseUrl } from "./settings/api.js";
import { getToken} from "./utils/storage.js";
import createAdminMenu from "./components/createAdminMenu.js";
const token = getToken();

if(!token) {
  location.href = "/";
}
createAdminMenu();

const form = document.querySelector("form");

const title = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");


form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    
    message.innerHTML = "";
    

   
    
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
   


    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 ) {
        return displayMessage("error",
        "Please enter values in the input fields",
        ".message-container");
    }
    addProduct(titleValue, priceValue, descriptionValue);
  
   
}

 async function addProduct(title, price, description, file) {
    const url = baseUrl + "products";
    const data = JSON.stringify({title: title, price: price, description: description});

 

    const options = {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        },
      };
      try {
          const response = await fetch(url, options);
          const json = await response.json();
          
        
          
          if(json.created_at) {
            displayMessage("Success",
            "Product added",
            ".message-container");
            form.reset();
        }
        
          }
          

      
      catch(error) {
          console.log(error)
      }
      
}