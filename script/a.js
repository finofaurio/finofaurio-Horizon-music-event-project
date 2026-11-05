// Subscribir y gestionar el carrito
document.addEventListener('DOMContentLoaded', () => {
    const subButtons = document.querySelectorAll('.hz-btn-sub');
    const cartContainer = document.querySelector('#cart');

    subButtons.forEach((button) => {
        let subscribed = false;
        let cartItemDiv = null;

        // Obtener la información del evento desde la tarjeta contenedora
        const article = button.closest('article');
        const titleElement = article ? article.querySelector('h3') : null;
        const eventTitle = titleElement ? titleElement.textContent : 'Evento Horizon';
        
        // Obtener el costo/precio
        let price = button.getAttribute('data-cost');
        if (!price && article) {
            const priceTag = article.querySelector('.hz-price-tag');
            if (priceTag) {
                price = priceTag.getAttribute('data-cost') || priceTag.textContent;
            }
        }

        button.addEventListener('click', () => {
            subscribed = !subscribed; 

            if (subscribed) {
                button.textContent = 'Unsubscribe';
                
                // Crear el div dentro del contenedor con id="cart"
                cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'hz-card-border card hz-card p-4 mb-2';
                cartItemDiv.innerHTML = `
                    <h6 class="fw-bold">${eventTitle}</h6>
                    <p class="mb-0">${price ? (price.includes('S/.') ? price : 'Ticket S/. ' + price) : ''}</p>
                `;
                
                if (cartContainer) {
                    cartContainer.appendChild(cartItemDiv);
                }
            } else {
                button.textContent = 'Subscribe';
                
                // Eliminar el div del carrito al desuscribirse
                if (cartItemDiv && cartItemDiv.parentNode) {
                    cartItemDiv.parentNode.removeChild(cartItemDiv);
                    cartItemDiv = null;
                }
            }
        });
    });
});