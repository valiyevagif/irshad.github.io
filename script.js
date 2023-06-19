let quantity = document.querySelector('.quantity');
let btnAdd = document.querySelectorAll('.btn-addtocart');
let cartIcon = document.querySelector('.fa-cart-shopping');
let cartSide = document.querySelector('.sidebar-cart');
let buttonClose = document.querySelector('.btn-close')
let userName = document.querySelector('.username');
let btnLogin = document.querySelector('.btnLogin');

btnLogin.addEventListener('click', () => {
    let username = prompt("Please enter your username:");
    let usernameElement = document.querySelector('h7');
    usernameElement.innerHTML = `👋  <b>Xoş gəldin,</b> ${username}!`;
    btnLogin.style.display = "none";
})



btnAdd.forEach(button => {
    button.addEventListener('click', () => {
        let currentQuantity = Number(quantity.textContent);
        currentQuantity++;
        quantity.textContent = currentQuantity;
    })

})

cartIcon.addEventListener('click', () => {
    cartSide.classList.toggle('open');

    buttonClose.addEventListener('click', () => {
        cartSide.classList.remove('open');
    })
})


btnAdd.forEach(button => {
    button.addEventListener('click', () => {
        let productContainer = button.closest('.product-container');
        let productImg = productContainer.querySelector('img').src;
        let productName = productContainer.querySelector('h4').textContent;
        let productPrice = productContainer.querySelector('p').textContent;
        let cartUl = document.querySelector('.cart-items');

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
    })
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-cartDelete')) {
        let cartItem = e.target.closest('.cart-item-container');
        cartItem.remove();

        let currentQuantity = Number(quantity.textContent);
        currentQuantity--;
        quantity.textContent = currentQuantity;
    }

});

let btnHamburger = document.querySelector('.hamburger');
let navMobile = document.querySelector('.nav-mobile-bar');

btnHamburger.addEventListener('click', () => {
    navMobile.classList.toggle('opened');
})


