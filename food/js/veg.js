<script>
        document.addEventListener("DOMContentLoaded", function () {
            const buttons = document.querySelectorAll(".add-to-cart");
            buttons.forEach(button => {
                button.addEventListener("click", function () {
                    const section = this.parentElement;
                    const itemName = section.getAttribute("data-name");
                    const itemPrice = section.getAttribute("data-price");
                    
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                    let item = cart.find(i => i.name === itemName);
                    
                    if (item) {
                        item.quantity += 1;
                    } else {
                        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
                    }
                    
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert("Added to cart!");
                });
            });
        });
    </script>