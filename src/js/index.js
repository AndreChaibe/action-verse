
import { closeOrderModal } from "./order-modal.js";
import { selectionButtonLayout, setupRemoveItemListeners } from "./button-handlers.js";


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeOrderModal();
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('order-modal')) {
        closeOrderModal();
    }
});


function initializeApp() {
    selectionButtonLayout();
    setupRemoveItemListeners();
    setupCartDirectionalIcon();
}

function setupCartDirectionalIcon() {
    const iconDirectionalCart = document.getElementById('icon-directional-cart');
    const cartContainer = document.querySelector('.container-cart');
    
    if (iconDirectionalCart && cartContainer) {
        iconDirectionalCart.addEventListener('click', () => {
            cartContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
        
        iconDirectionalCart.style.cursor = 'pointer';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}