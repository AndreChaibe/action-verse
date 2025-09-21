import { cartState, calculateCartTotal, updateCartCounter, updateTotalValue } from "./cart.js";
import { actionFiguresContent } from "./data.js";

const cart = document.querySelector(".cart");

export function addItemCart() {
    if (!document.querySelector(".list-items")) {
        cart.innerHTML = addList();
    }

    const listItems = document.querySelector(".list-items");
    listItems.innerHTML = '';

    cartState.items.forEach(itemIndex => {
        const quantity = cartState.counters[itemIndex] || 1;
        listItems.innerHTML += addItemList(itemIndex, quantity);
    });

    updateCartCounter();
    listItems.innerHTML += completionOrder();
    updateTotalValue();
}

function addList() {
    return `<span id="quantity-of-items">Seu carrinho (<span id="counter">0</span>)</span>
            <ul class="list-items"></ul>`;
}

function addItemList(index, unitValue) {
    const unitsValue = cartState.counters[index] * actionFiguresContent[index].price;

    return `<li class="item" data-index="${index}">
        <div class="purchase-details">
            <span class="product-name">${actionFiguresContent[index].name}</span>
            <div class="buy-values">
                <span class="unit">${unitValue}x</span>
                <span class="unit-value">${actionFiguresContent[index].price.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</span>
                <span class="value-of-units">${unitsValue.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</span>                         
            </div>
        </div>
        <img class="button-remove-item" src="./src/images/icon-remove-item.svg" alt="Remover item">
    </li>`;
}

function completionOrder() {
    if (cartState.items.length > 0) {
        const total = calculateCartTotal();
        return `<div id="cart-completion">   
                <div class="final-value">   
                   <span>Pedido Total </span>
                   <span id="total-value">${total.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</span>
                </div>
                <button id="confirm-order">Confirmar pedido</button>
            </div>`;
    }

    if (cartState.items.length === 0) {
        return `<li class="default-cart-content">      
                    <img id="illustration" src="./src/images/empty-cart-illustration.png" alt="ilustração de carrinho vazio" />
                    <span class="empty-cart-message">Seus itens adicionados aparecerão aqui.</span>
                 </li>`;
    }
}