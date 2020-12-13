import createHtmlProducts from "./createHtmlProducts.js";

export default function searchData(product) {



const search = document.querySelector(".search");

search.onkeyup = function (event) {
    console.log(event);

    const searchValue = this.value.trim().toLowerCase();

    const filteredData = product.filter(function (product) {
        if (product.title.toLowerCase().startsWith (searchValue)) {
            return true;
        }
    });

    createHtmlProducts(filteredData);
};

}