export default function createList(listItems) {
  const container = document.querySelector(".container_cart");

  container.innerHTML = "";

  if (listItems.length === 0) {
    container.innerHTML = `<div class ="display-empty">
        <p>The cart is empty</p>
        </div>
        
        `;
  } else {
    listItems.forEach((listItem) => {
      const format = new Intl.NumberFormat("no-NO", {
        style: "currency",
        currency: "NOK",
      }).format(listItem.price);

      container.innerHTML += `
    
        <div class="container_cart-item">
        <img src="http://localhost:1337${listItem.image.url}" class="img cart-img"/>
        <a class="product" href="detail.html?id=${listItem.id}">
        <h2>${listItem.title}</h2>
        </a>
        <div class="item-price">
        <p>Price: ${format}</p>
        </div>
        
        </div>


        `;
    });

    function addTotalPrice() {
      const sum = listItems.reduce(function (total, currentValue) {
        return total + currentValue.price;
      }, 0);

      const format = new Intl.NumberFormat("no-NO", {
        style: "currency",
        currency: "NOK",
      }).format(sum);

      container.innerHTML += `
    <div class="container_cart-item total-price">
    <p> Total: ${format} </p>
    </div>
    `;
    }
    addTotalPrice();
  }
}
