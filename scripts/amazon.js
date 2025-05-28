const products = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        productName: "Athletic Cotton Socks",
        priceInCents: 1090,
        // nested object
        rating: {
            stars: 4,
            count: 87
        },
        keywords: ["socks", "athletic", "cotton", "athletic socks", "apparel"]
    },

    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "images/products/intermediate-composite-basketball.jpg",
        productName: "Intermediate Composite Basketball",
        priceInCents: 3490,
        rating: {
            stars: 4,
            count: 127
        },
        keywords: ["basketball", "ball", "basket", "sports"]
    },

    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        productName: "Adults Plain Cotton Tshirt - 2 Pack",
        priceInCents: 799,
        rating: {
            stars: 4.5,
            count: 56
        },
        keywords: ["tshirts", "apparel", "mens",],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },

    {
        id: "75f89r5c-123d-406b-8b66-003613257d24",
        image: "images/products/dkthdd.jpg",
        productName: "Desktop Hard Drive",
        priceInCents: 541,
        rating: {
            stars: 3.5,
            count: 113
        },
        keywords: ["hard drive", "hard drives", "hard disk", "hard disks", "storage", "storage devices", "storage media", "storage medium", "storage media devices", "storage media device", "storage media devices", "storage media device", "storage media devices", "storage media device", "storage media devices", "storage media device", "storage media devices", "storage media device", "storage media devices", "storage media device", "storage media devices", "storage media device", "storage media devices", "storage media device", "storage media devices", "storage media device"],
        type: "hardware",
        sizeChartLink: "images/hardware-size-chart.png"
    },
];
let productsHtml = "";
products.forEach((product, index) => {
    productsHtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.productName}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count} Rating

            </div>
          </div>

          <div class="product-price">
            $${(product.priceInCents / 100).toFixed(2)} USD
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHtml;

