document.addEventListener("DOMContentLoaded", function () {
    const cartTable = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartTable.innerHTML = "";

        let totalAmount = 0;

        cart.forEach((item, index) => {
            let row = document.createElement("tr");

            let itemName = document.createElement("td");
            itemName.textContent = item.name;

            let itemPrice = document.createElement("td");
            itemPrice.textContent = "₹" + item.price;

            let quantityTd = document.createElement("td");
            let quantityInput = document.createElement("input");
            quantityInput.type = "number";
            quantityInput.value = item.quantity;
            quantityInput.min = 1;
            quantityInput.addEventListener("change", function () {
                updateQuantity(index, quantityInput.value);
            });
            quantityTd.appendChild(quantityInput);

            let totalTd = document.createElement("td");
            let itemTotal = item.price * item.quantity;
            totalTd.textContent = "₹" + itemTotal;
            totalAmount += itemTotal;

            let removeTd = document.createElement("td");
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "X";
            removeBtn.classList.add("remove-btn");
            removeBtn.addEventListener("click", function () {
                removeItem(index);
            });
            removeTd.appendChild(removeBtn);

            row.appendChild(itemName);
            row.appendChild(itemPrice);
            row.appendChild(quantityTd);
            row.appendChild(totalTd);
            row.appendChild(removeTd);

            cartTable.appendChild(row);
        });

        cartTotal.textContent = totalAmount;
    }

    function updateQuantity(index, newQuantity) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart[index].quantity = parseInt(newQuantity);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }

    function removeItem(index) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }

    document.getElementById("checkout").addEventListener("click", function () {
        alert("Proceeding to checkout!");
    });

    loadCart();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

