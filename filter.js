document.getElementById('apply-filters').addEventListener('click', () => {
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardPrice = card.getAttribute('data-price');

        // Show or hide cards based on filters
        if ((category === 'all' || category === cardCategory) &&
            (price === 'all' || price === cardPrice)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.getElementById('clear-filters').addEventListener('click', () => {
    const productCards = document.querySelectorAll('.product-card');

    // Reset dropdowns
    document.getElementById('category').value = 'all';
    document.getElementById('price').value = 'all';

    // Show all products
    productCards.forEach(card => {
        card.style.display = 'block';
    });
});