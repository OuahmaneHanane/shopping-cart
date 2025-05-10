document.addEventListener("DOMContentLoaded", () => {
  // Get all necessary elements
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");
  const likeButtons = document.querySelectorAll(".fa-heart");

  // Function to recalculate total
  function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll(".card"); // Select all .card elements

    cards.forEach(card => {
      const quantitySpan = card.querySelector(".quantity");
      const unitPriceTag = card.querySelector(".unit-price");

      if (quantitySpan && unitPriceTag) {
        const quantity = parseInt(quantitySpan.textContent);
        const unitPrice = parseFloat(unitPriceTag.textContent);
        total += quantity * unitPrice;
      }
    });

    document.querySelector(".total").textContent = `${total} $`;
  }

  // Increase quantity
  plusButtons.forEach(button => {
    button.addEventListener("click", () => {
      const quantitySpan = button.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantitySpan.textContent);
      quantity++;
      quantitySpan.textContent = quantity;
      updateTotal();
    });
  });

  // Decrease quantity
  minusButtons.forEach(button => {
    button.addEventListener("click", () => {
      const quantitySpan = button.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
        updateTotal();
      }
    });
  });

  // Delete item
  deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".card"); // Select the entire card element (including image, price, etc.)
      card.remove(); // Remove the whole card element
      updateTotal(); // Recalculate the total
    });
  });

  // Like item (toggle heart color)
  likeButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked");
      if (button.classList.contains("liked")) {
        button.style.color = "red";
      } else {
        button.style.color = "black";
      }
    });
  });
});
