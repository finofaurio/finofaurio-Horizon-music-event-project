//Subscribir
document.addEventListener('DOMContentLoaded',() => {
    const subButton = document.querySelectorAll('.hz-btn-sub');
    const cartContainer = document.querySelector('#cart');
    subButton.forEach((button) => {
        let subscribed = false;
        let cart = null;

        button.addEventListener('click', () => {
            subscribed = !subscribed; 
            if(subscribed){
                button.textContent = 'Unsubscribe'
                cart = document.createElement('div');
                cart.className = 'hz-card-border card hz-card p-4 mb-2';
                cart.innerHTML = `
                    <h3 class="fw-bold">Horizon Event</h3>
                `;
                if (cartContainer) {
                    cartContainer.appendChild(cart);
                }

            }else{
                button.textContent = 'Subscribe'
            }
            
            //func read the event that's clicked to show the subscribed eventin the cart
            
        });
    });
})

// funcion de calculadora


