import { cartState, updateCartItem, updateUnitsValue, updateTotalValue } from "./cart.js";
import { addItemCart } from "./cart-ui.js";
import { DefaultButtonMessage } from "./display.js";
import { showOrderConfirmation } from "./order-modal.js";
import { counter } from "./data.js";
import { iconList } from "./icon.js";

const dessertButton = document.querySelectorAll(".action-figure-button");
const cart = document.querySelector(".cart");

export function addMoreUnit(buttonMore, counterElement, index) {
    buttonMore.addEventListener("click", (event) => {
        event.stopPropagation();
        let currentValue = Number(counterElement.textContent);
        if (currentValue < 10) {
            currentValue++;
            counterElement.textContent = currentValue;
            cartState.counters[index] = currentValue;
            updateCartItem(index, currentValue);
            updateUnitsValue(index);
            updateTotalValue(); 
        }
    });
}

export function addLessUnit(buttonLess, counterElement, index) {
    buttonLess.addEventListener("click", (event) => {
        event.stopPropagation();
        let currentValue = Number(counterElement.textContent);

        if (currentValue > 1) {
            currentValue--;
            counterElement.textContent = currentValue;
            cartState.counters[index] = currentValue;
            updateCartItem(index, currentValue);
            updateUnitsValue(index);
            updateTotalValue(); 
        } else if (currentValue === 1) {
            const itemIndex = cartState.items.indexOf(index);
            if (itemIndex > -1) {
                cartState.items.splice(itemIndex, 1);
            }
            delete cartState.counters[index];

            const correspondingButton = dessertButton[index];
            if (correspondingButton) {
                correspondingButton.classList.remove("button-active");
                correspondingButton.innerHTML = DefaultButtonMessage;
            }

            addItemCart(); 
        }
    });
}

export function setupRemoveItemListeners() {
    cart.addEventListener("click", (event) => {
        if (event.target.classList.contains("button-remove-item")) {
            const item = event.target.closest(".item");
            const itemElements = document.querySelectorAll(".item");
            const itemIndex = Array.from(itemElements).indexOf(item);

            if (itemIndex > -1 && itemIndex < cartState.items.length) {
                const buttonIndex = cartState.items[itemIndex];
                const correspondingButton = dessertButton[buttonIndex];
                if (correspondingButton) {
                    correspondingButton.classList.remove("button-active");
                    correspondingButton.innerHTML = DefaultButtonMessage;
                }
                cartState.items.splice(itemIndex, 1);
                delete cartState.counters[buttonIndex];
                addItemCart();
                setTimeout(() => {
                    setupConfirmOrderButton();
                }, 0);
            }
        }
    });
}

export function selectionButtonLayout() {
    dessertButton.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("button-active")) {
                button.classList.remove("button-active");
                button.innerHTML = DefaultButtonMessage;
                const itemIndex = cartState.items.indexOf(index);
                if (itemIndex > -1) {
                    cartState.items.splice(itemIndex, 1);
                    delete cartState.counters[index];
                }
            } else {
                button.classList.add("button-active");
                button.innerHTML = "";

                const btnMore = iconList[1]();
                const btnLess = iconList[2]();
                const ElementCounter = counter();

                ElementCounter.textContent = "1";
                cartState.counters[index] = 1;
                cartState.items.push(index);

                button.appendChild(btnMore);
                button.appendChild(ElementCounter);
                button.appendChild(btnLess);

                addMoreUnit(btnMore, ElementCounter, index);
                addLessUnit(btnLess, ElementCounter, index);
            }
            
            addItemCart(); 

            setTimeout(() => {
                setupConfirmOrderButton();
            }, 0);
        });
    });
}

export function setupConfirmOrderButton() {
    const confirmOrderButton = document.querySelector("#confirm-order");
    
    if (confirmOrderButton) {
        const newButton = confirmOrderButton.cloneNode(true);
        confirmOrderButton.parentNode.replaceChild(newButton, confirmOrderButton);
        
        newButton.addEventListener("click", () => {
            showOrderConfirmation();
        });
    }
}