let searchInput = document.getElementById("search-input");
let products = document.querySelectorAll(".shop__card");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    products.forEach(product => {

        let name = product.querySelector(".shop__name")
            .textContent.toLowerCase();

        if(name.includes(value)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});



let addCartButtons = document.querySelectorAll(".add-cart");
let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");
let cartCount = document.getElementById("cart-count");

let total = 0;
let count = 0;

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        let name = button.dataset.name;
        let price = parseInt(button.dataset.price);

        count++;
        cartCount.textContent = count;

        let existingItem = document.querySelector(
            `.cart-item[data-name="${name}"]`
        );

        if(existingItem){

            let qtyElement = existingItem.querySelector(".cart-qty");
            let qty = parseInt(qtyElement.textContent);

            qty++;
            qtyElement.textContent = qty;

            let subtotal = qty * price;

            existingItem.querySelector(".cart-subtotal")
                .textContent = subtotal;

        } else {

            let item = document.createElement("div");

            item.classList.add("cart-item");

            item.setAttribute("data-name", name);

            item.innerHTML = `
                <h4>${name}</h4>

                <p>
                    ₱${price} x 
                    <span class="cart-qty">1</span>
                </p>

                <p>
                    Subtotal: ₱
                    <span class="cart-subtotal">${price}</span>
                </p>
            `;

            cartItems.appendChild(item);

        }

        total += price;
        cartTotal.textContent = total;

    });

});

let hiddenCards = document.querySelectorAll(".hidden");

window.addEventListener("load", () => {

    hiddenCards.forEach((card, index) => {

        setTimeout(() => {
            card.classList.add("show");
        }, index * 200);

    });

});

let cartBtn = document.getElementById("cart-btn");
let cart = document.getElementById("cart");
let closeCart = document.getElementById("close-cart");
let backdrop = document.getElementById("cart-backdrop");

function openCart(){
    cart.classList.add("show");
    backdrop.classList.add("show");
}

function closeCartFunc(){
    cart.classList.remove("show");
    backdrop.classList.remove("show");
}

cartBtn.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartFunc);
backdrop.addEventListener("click", closeCartFunc);