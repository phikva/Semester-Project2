import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import createAdminMenu from "./components/createAdminMenu.js";

createAdminMenu();
const listItems = getFromStorage("list")
createList(listItems);
saveToStorage("list", listItems);







