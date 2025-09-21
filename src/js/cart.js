import { actionFiguresContent } from "./data.js";

export let cartState = {
    items: [],
    counters: {}
};

export function calculateCartTotal() {
    return cartState.items.reduce((total, itemIndex) => {
        const quantity = cartState.counters[itemIndex] || 0;
        const price = actionFiguresContent[itemIndex].price;
        return total + (quantity * price);
    }, 0);
}

export function updateTotalValue() {
    const totalValueElement = document.querySelector("#total-value");
    if (totalValueElement) {
        const total = calculateCartTotal();
        totalValueElement.textContent = total.toLocaleString("pt-BR", { 
            style: 'currency', 
            currency: 'BRL' 
        });
    }
}

export function updateCartCounter() {
    const counterElement = document.querySelector("#counter");
    if (counterElement) {
        counterElement.textContent = cartState.items.length;
    }
}

export function updateCartItem(index, newQuantity) {
    const cartItemIndex = cartState.items.indexOf(index);
    if (cartItemIndex !== -1) {
        const itemElements = document.querySelectorAll(".item");
        if (itemElements[cartItemIndex]) {
            const unitElement = itemElements[cartItemIndex].querySelector(".unit");
            if (unitElement) {
                unitElement.textContent = `${newQuantity}x`;
            }
        }
    }
}

export function updateUnitsValue(index) {
    const cartItemIndex = cartState.items.indexOf(index);
    if (cartItemIndex !== -1) {
        const itemElements = document.querySelectorAll(".item");
        const itemElement = itemElements[cartItemIndex];
        const valueElement = itemElement.querySelector(".value-of-units");
        if (valueElement) {
            const unitsValue = cartState.counters[index] * actionFiguresContent[index].price;
            valueElement.textContent = unitsValue.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' });
        }
    }
}

export function clearCart() {
    cartState.items = [];
    cartState.counters = {};
}