const cartBtn = document.getElementById("cartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");

function toggleCart() {
  cartDrawer.classList.toggle("translate-x-full");
}

cartBtn.addEventListener("click", toggleCart);
closeCartBtn.addEventListener("click", toggleCart);

// Sample function to add items to the cart
function addToCart(item) {
  const li = document.createElement("li");
  li.textContent = item;
  cartItems.appendChild(li);
}

// Sample usage
addToCart("Product 1");
addToCart("Product 2");
