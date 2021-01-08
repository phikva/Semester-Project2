import { getUsername } from "../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createAdminMenu() {
  const { pathname } = document.location;

  const username = getUsername();

  let authLink = ` <li>
  <a href="login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>
  </li>`;

  if (username) {
    authLink = `
      <li><a href="form.html" class="${
        pathname === "/form.html" ? "active" : ""
      }">ADD PRODUCTS</a>
      </li>
      <li>
      <button id ="logout" class="btn">Logout ${username}</buton>
      </li>`;
  }

  const container = document.querySelector(".nav_links");

  container.innerHTML = `
                <li><a href="/" class="${
                  pathname === "/" ? "active" : ""
                }">HOME</a>
                </li>
                <li><a href="products.html" class="${
                  pathname === "/products.html" ? "active" : ""
                }">PRODUCTS</a>
                </li>
                <li><a href="cart.html" class="${
                  pathname === "/cart.html" ? "active" : ""
                }">CART</a>
                </li>
                
                ${authLink}

`;
  logoutButton();
}
