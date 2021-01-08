import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { getToken} from "./utils/storage.js";
import createAdminMenu from "./components/createAdminMenu.js";
import deleteButton from "./components/items/deleteButton.js";
const token = getToken();

if(!token) {
  location.href = "/";
}
createAdminMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// if (!id) {
//   document.location.href = "/";
// }

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const image = document.querySelector("#url");




(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

 
    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    idInput.value = details.id;
    featured.value = details.featured;
    image.value = ` http://localhost:1337${details.image.url}`;
    deleteButton(details.id);
    console.log(details.image.url);
  } catch (error) {
    console.log(error);
  }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";
    
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;
    const featuredValue = featured.value;
    const imageValue = image.value;
    

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 )  {
        return displayMessage("error",
        "Please enter values in the input fields",
        ".message-container");
    }
    updateProduct(titleValue, priceValue, descriptionValue, idValue, featuredValue, imageValue);

}

async function updateProduct(title, price, description, id, featured, image){
    const url = baseUrl + "products/" + id;
    const data = JSON.stringify({title: title, price: price, description: description, featured: featured, image: image.url});
    
 

    const options = {
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)

        if(json.updated_at) {
            displayMessage("Success",
            "Product updated",
            ".message-container");
        }
    }catch(error) {
        console.log(error)
    }


}
