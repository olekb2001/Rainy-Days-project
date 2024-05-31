document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const priceParagraph = document.getElementById('price');
    const basePrice = 157.00; 
    quantityInput.addEventListener('input', () => {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = quantity > 0 ? (basePrice * quantity).toFixed(2) : basePrice.toFixed(2);
        priceParagraph.textContent = `${totalPrice}$`;
    });
});