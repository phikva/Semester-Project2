export default function createHtmlFeaturedProducts(json) {
  const FeaturedProductContainer = document.querySelector(
    ".featured-product-container"
  );
 
  FeaturedProductContainer.innerHTML = "";

  json.forEach(function (product) {
    const format = new Intl.NumberFormat("no-NO", {
      style: "currency",
      currency: "NOK",
    }).format(product.price);
    if (product.featured === true) {
      return (FeaturedProductContainer.innerHTML += `
            <div class="container_items">

            
            
            <div class="container_img">
            <img src="http://localhost:1337${product.image.url}" class="img"/>
            <a class="product" href="detail.html?id=${product.id}">
             <h3>${product.title}</h3>
            </a
            <p>Price: ${format}</p>
            </div>
            
            
            </div>
            `);
    }
  });
  
}
