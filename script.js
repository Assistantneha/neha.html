let allProducts = [];
let selectedProduct = null;
fetch("https://dummyjson.com/products?limit=50")
.then(res => res.json())
.then(data => {
  allProducts = data.products;
  showProducts(allProducts);
});

function showProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <h3>${p.title}</h3>
        <img src="${p.thumbnail}" width="120">
        <div class="price-box">₹${p.price}</div>

        <button class="add" onclick="addToCart('${p.title}', ${p.price})">Add to Cart</button>
       <button class="buy" onclick='buyNow(${JSON.stringify(p)})'>Buy Now</button>

      </div>
    `;
  });
}
 
/* 🔹 ADD TO CART */
function addToCart(name, price) {
  const cartItems = document.getElementById("cart-items");

  const li = document.createElement("li");
  li.innerHTML = `
    ${name} - ₹${price}
    <button class="remove" onclick="removeItem(this, ${price})">X</button>
  `;
  cartItems.appendChild(li);

  updateTotal(price);
  updateCount(1);
}

/* 🔹 REMOVE ITEM */
function removeItem(btn, price) {
  btn.parentElement.remove();
  updateTotal(-price);
  updateCount(-1);
}
function buyNow(product) {
  selectedProduct = product;
  
  document.getElementById("m-img").src = product.thumbnail;
  document.getElementById("m-title").innerText = product.title;
  document.getElementById("m-desc").innerText = product.description;
  document.getElementById("m-brand").innerText = product.brand;
  document.getElementById("m-category").innerText = product.category;
  document.getElementById("m-rating").innerText = product.rating;
  document.getElementById("m-stock").innerText = product.stock;
  document.getElementById("m-price").innerText = product.price;

  document.getElementById("product-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

function addFromModal() {
  addToCart(selectedProduct.title, selectedProduct.price);
  closeModal();
}

/* 🔹 TOTAL & COUNT */
function updateTotal(amount) {
  const total = document.getElementById("total");
  total.innerText = Number(total.innerText) + amount;
}

function updateCount(num) {
  const count = document.getElementById("cart-count");
  count.innerText = Number(count.innerText) + num;
}

/* 🔹 EMPTY CART */
function clearCart() {
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("total").innerText = 0;
  document.getElementById("cart-count").innerText = 0;
}

/* 🔹 SEARCH */
document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );
  showProducts(filtered);
});
