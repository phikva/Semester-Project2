import { baseUrl } from "../../settings/api.js";
import { getToken} from "../../utils/storage.js";

export default function deleteButton(id) {
    const container = document.querySelector(".delete-container");

    container.innerHTML =`<button type="button" class="btn delete">Delete</button>`;

    const button = document.querySelector(".btn.delete");
    
    button.onclick = async function () {
        console.log(id)
        const deleteProd  = confirm ("Are you sure you want to delete this?");
        console.log(deleteProd)
        if(deleteProd) {
            const url = baseUrl + "products/" + id;
            const token = getToken();
            const options = {
                method: "DELETE",
                headers: {
                    Authorization:`Bearer ${token}`,
                },
    
            };
            try {
                const response = await fetch (url, options);
                const json = await response.json();

                location.href = "/";
    
            }
            catch(error){
                console.log(error);
    
            }
        }


       
    };

}