import clearStorage from "../utils/storage.js";


export default function logoutButton () {
    const button = document.querySelector("#logout");
    

    if(button) {
        button.onclick = function() {
            
            const logout = confirm ("Are you sure?");

            if(logout) {
                clearStorage();
                location.href = "/";
            }
        }
    }
}