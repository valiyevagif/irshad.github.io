let quantity = document.querySelector('.quantity');
let btnAdd = document.querySelectorAll('.btn-addtocart');
let cartIcon = document.querySelector('.fa-cart-shopping');
let cartSide = document.querySelector('.sidebar-cart');
let buttonClose = document.querySelector('.btn-close');
let cartUl = document.querySelector('.cart-items');

// Load cart quantity and items from localStorage
let savedQuantity = localStorage.getItem('cartQuantity');
let savedItems = localStorage.getItem('cartItems');

if (savedQuantity) {
  quantity.textContent = savedQuantity;
}

if (savedItems) {
  cartUl.innerHTML = savedItems;
}

btnAdd.forEach(button => {
  button.addEventListener('click', () => {
    let currentQuantity = Number(quantity.textContent);
    currentQuantity++;
    quantity.textContent = currentQuantity;
  });
});

cartIcon.addEventListener('click', () => {
  cartSide.classList.toggle('open');
});

buttonClose.addEventListener('click', () => {
  cartSide.classList.remove('open');
});

btnAdd.forEach(button => {
  button.addEventListener('click', () => {
    let productContainer = button.closest('.product-container');
    let productImg = productContainer.querySelector('img').src;
    let productName = productContainer.querySelector('h4').textContent;
    let productPrice = productContainer.querySelector('p').textContent;

    let cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <div class="cart-item-container">
        <div class="left-side">
          <div class="image-container">
            <img src="${productImg}" alt="">
          </div>
          <div class="product-info">
            <h4>${productName}</h4>
            <p>${productPrice}</p>
          </div>
        </div>
        <div class="right-side">
          <button class="btn-cartDelete">Səbətdən sil</button>
        </div>
      </div>
    `;
    cartUl.appendChild(cartItem);

    // Save cart items to localStorage
    localStorage.setItem('cartItems', cartUl.innerHTML);
  });
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-cartDelete')) {
    let cartItem = e.target.closest('.cart-item-container');
    cartItem.remove();

    let currentQuantity = Number(quantity.textContent);
    currentQuantity--;
    quantity.textContent = currentQuantity;

    // Save cart items to localStorage
    localStorage.setItem('cartItems', cartUl.innerHTML);
  }
});

window.addEventListener('beforeunload', () => {
  // Save cart quantity to localStorage
  localStorage.setItem('cartQuantity', quantity.textContent);
});
