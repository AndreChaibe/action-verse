import { cartState, calculateCartTotal, clearCart } from "./cart.js";
import { addItemCart } from "./cart-ui.js";
import { DefaultButtonMessage } from "./display.js";
import { actionFiguresContent } from "./data.js";

const dessertButton = document.querySelectorAll(".action-figure-button");

export function orderPurchaseSummary() {
    const total = calculateCartTotal();
    
    return `<div class="order-modal">
               <div class="order-content">
                  <div class="order-header">
                     <img src="./src/images/icon-order-confirmed.svg" alt="ícone de confirmação" class="confirm-icon">
                     <button class="close-modal">
                        <img src="./src/images/icon-remove-item.svg" alt="fechar modal" class="close-icon">
                     </button>
                  </div>
                  <h2 class="order-title">Pedido Confirmado</h2>
                  <p class="order-subtitle">Obrigado pela preferência, volte sempre!</p>

                  <ul class="purchased-items-list">
                     ${generatePurchasedItemsList()}
                  </ul>
                  
                  <div class="order-total-section">
                     <span class="total-label">Total do pedido</span>
                     <span class="total-amount">${total.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</span>
                  </div>
                  
                  <button class="start-new-order-btn">Iniciar novo pedido</button>
               </div>
           </div>`;
}

function generatePurchasedItemsList() {
    return cartState.items.map(itemIndex => {
        const quantity = cartState.counters[itemIndex];
        const item = actionFiguresContent[itemIndex];
        const unitPrice = item.price;
        const totalItemPrice = quantity * unitPrice;
        
        return PurchasedItems(itemIndex, quantity, unitPrice, totalItemPrice);
    }).join('');
}

function PurchasedItems(itemIndex, quantity, unitPrice, totalPrice) {
    const item = actionFiguresContent[itemIndex];
    
    return `<li class="purchased-item">
              <img src="${item.image?.thumbnail || item.image}" alt="${item.name}" class="item-thumbnail">
              <div class="product-information">
                 <span class="product-name">${item.name}</span>
                 <div class="price-details">
                    <span class="unit-quantity">${quantity}x</span>
                    <span class="unit-price">${unitPrice.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</span>
                 </div>
              </div>
              <span class="item-total">${totalPrice.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</span>
           </li>`;
}

export function showOrderConfirmation() {
    const modalHTML = orderPurchaseSummary();
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    
    setupModalEventListeners();
}

function setupModalEventListeners() {
    const closeButton = document.querySelector('.close-modal');
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            closeOrderModal();
        });
    }
    
    const startNewOrderButton = document.querySelector('.start-new-order-btn');
    if (startNewOrderButton) {
        startNewOrderButton.addEventListener('click', (event) => {
            event.preventDefault();
            startNewOrder();
        });
    }
}

export function closeOrderModal() {
    const modal = document.querySelector('.order-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

export function startNewOrder() {
    clearCart();
    
    dessertButton.forEach(button => {
        button.classList.remove("button-active");
        button.innerHTML = DefaultButtonMessage;
    });
    
    addItemCart();
    closeOrderModal();
}