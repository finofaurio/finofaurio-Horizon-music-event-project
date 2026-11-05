//Subscribir
document.addEventListener('DOMContentLoaded',() => {
    const subButtons = document.querySelectorAll('.hz-btn-sub');
    subButtons.forEach((button) => {
        let subscribed = false;
        button.addEventListener('click', () => {
            subscribed = !subscribed; 
            button.textContent = subscribed ? 'Unsubscribe' : 'Subscribe'; //change this
        });
    });
})


//func read the event that's clicked to show the subscribed eventin the cart


// funcion de calculadora


