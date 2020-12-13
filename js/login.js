import displayMessage from "./components/displayMessage.js";
import { baseUrl } from "./settings/api.js";
import { saveToken, saveUser } from "./utils/storage.js";
import createAdminMenu from "./components/createAdminMenu.js";

createAdminMenu();



const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  message.innerHTML = "";
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue === 0) {
    return displayMessage(
      "error",
      "Please enter username and password",
      ".message-container"
    );
  }

  logIn(usernameValue, passwordValue);
}
async function logIn(username, password) {
  const url = baseUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.user) {
    //   displayMessage("success", "Successfully logged in", ".message-container");
      saveToken(json.jwt);
      saveUser(json.user);
      location.href ="/";
    }

    if (json.error) {
      displayMessage("error", "Invalid login details", ".message-container");
    }
   
  } catch (error) {
    console.log(error);
  }
}
