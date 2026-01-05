// addToCart function tab chalega jab user ADD TO CART button click karega

// ye 2 cheeze leta hai product ka name and product ki price
// JSON.parse use karte hai kyuki CART me hum data list ,array or list ki form me save kar sakate hai taki usko remove and add bhi kar sake
// push me new product cart me add huye 
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    id: productId,
  name: product.name,
  price: product.price,
  quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

// Display cart items on cart page
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  const emptyMsg = document.getElementById("empty-msg");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    totalPriceEl.textContent = "";
    return;
  }

  emptyMsg.style.display = "none";

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartContainer.innerHTML += `
      <div class="cart-item-card">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>

        <div class="qty">
          <button onclick="updateQty(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateQty(${index}, 1)">+</button>
        </div>

        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalPriceEl.textContent = "Total: ₹" + total;
}

function updateQty(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}



function changeSlide(button, direction) {
  const carousel = button.parentElement;
  const slides = carousel.querySelectorAll(".slide");

  let currentIndex = 0;

  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      currentIndex = index;
      slide.classList.remove("active");
    }
  });

  let newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }

  if (newIndex >= slides.length) {
    newIndex = 0;
  }

  slides[newIndex].classList.add("active");
}


const products = {
      1: {
        name: "Couple Name Plate with photo",
        price: 299,
        images: [
          "images/Aanand&Anjali1.jpg",
          "images/Aanand&Anjali2.jpeg"
        ]
      },
      
      2: {
        name: "Baby Foot Print",
        price: 299,
        images: [
          "images/BabyFootPrint1.jpeg",
          "images/BabyFootPrint2.jpeg"
        ]
      },

      3: {
        name: "Baby Boy Foot Print",
        price: 299,
        images: [
          "images/BabyFootPrintBoy1.jpeg",
          "images/BabyFootPrintBoy2.jpeg"
        ]
      },

      4: {
        name: "Ball With Fire",
        price: 299,
        images: [
          "images/BallWithFire1.jpeg",
          "images/BallWithFire2.jpeg",
          "images/BallWithFire3.jpeg"
        ]
      },
      
      5: {
        name: "Evil Eye",
        price: 299,
        images: [
          "images/evileye1.jpeg",
          "images/evileye2.jpeg"
        ]
      },

      6: {
        name: "Friends with photo",
        price: 299,
        images: [
          "images/friends1.jpeg",
          "images/friends2.jpeg"
        ]
      },

      7: {
        name: "Great day Quote",
        price: 299,
        images: [
          "images/GreateDay1.jpeg",
          "images/great2.jpeg"
        ]
      },

      8: {
        name: "Heart Key Holder",
        price: 299,
        images: [
          "images/heartkeyholder1.jpeg",
          "images/heartkeyholder2.jpeg"
        ]
      },

      9: {
        name: "captain America With Name",
        price: 299,
        images: [
          "images/Madhu1.jpeg",
          "images/madhu2.jpeg",
          "images/madhu3.jpeg"
        ]
      },

      10: {
        name: "Mom Is Friend",
        price: 299,
        images: [
          "images/MomIsFriend.jpeg"
        ]
      },

      11: {
        name: "Nice Memories With Photos",
        price: 299,
        images: [
          "images/NiceMemories1.jpeg",
          "images/NiceMemories2.jpeg"
        ]
      },

      12: {
        name: "Couple Name",
        price: 299,
        images: [
          "images/pradeep&nidhiNAME.jpeg"
        ]
      },

      13: {
        name: "Customized Name",
        price: 299,
        images: [
          "images/soniyaname1.jpeg",
          "images/soniyaname2.jpeg"
        ]
      },

      14: {
        name: "spiderman",
        price: 299,
        images: [
          "images/spiderman1.jpeg",
          "images/spiderman2.jpeg"
        ]
      },

      15: {
        name: "Sunflower",
        price: 299,
        images: [
          "images/sunflower .jpeg",
        ]
      },
    };

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const product = products[productId];

    if (!product) {
      alert("Product not found");
    }

    // Set name & price
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = "₹" + product.price;

    // idhar CODE AATA HAI
    const carousel = document.getElementById("product-carousel");

    product.images.forEach((img, index) => {
      const image = document.createElement("img");
      image.src = img;
      image.className = "slide" + (index === 0 ? " active" : "");
      carousel.appendChild(image);
    });
// ===== SLIDER LOGIC =====
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("nextBtn").addEventListener("click", () => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
});

document.getElementById("prevBtn").addEventListener("click", () => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
});

const addBtn = document.getElementById("addToCartBtn");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: productId,
      name: product.name,
      price: product.price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ Product added to cart");
  });
}

const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    window.location.href = "checkout.html";
  });
}

const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
      items: cart,
      date: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("🎉 Order placed successfully!");
    window.location.href = "orders.html";
  });
}

function displayOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const container = document.getElementById("order-list");

  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = "<p>No orders yet</p>";
    return;
  }

  orders.forEach(order => {
    let html = `<div class="cart-item-card">
      <p><strong>Date:</strong> ${order.date}</p>`;

    order.items.forEach(item => {
      html += `<p>${item.name} × ${item.quantity}</p>`;
    });

    html += "</div>";
    container.innerHTML += html;
  });
}

displayOrders();

const whatsappBtn = document.getElementById("whatsappOrder");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let msg = "Hello, I want to order:%0A";

    cart.forEach(item => {
      msg += `${item.name} x ${item.quantity}%0A`;
    });

    window.open(`https://wa.me/917020789219?text=${msg}`);
  });
}
