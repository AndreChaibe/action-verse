const iconCart = document.createElement("img");
iconCart.src = "./src/images/ic--outline-add-shopping-cart.svg";
iconCart.alt = "Icone para adicionar ao carrinho";
iconCart.classList.add("icon-cart");

function addButtonMore() {
    const iconMore = document.createElement("img");
    iconMore.src = "./src/images/icon-increment-quantity.svg";
    iconMore.alt = "Icone para adicionar ao carrinho";
    iconMore.classList.add("icon-more");
    return iconMore;
}

function addButtonLess() {
    const iconless = document.createElement("img");
    iconless.src = "./src/images/icon-decrement-quantity.svg";
    iconless.alt = "Icone para adicionar ao carrinho";
    iconless.classList.add("icon-less");
    return iconless;
}

export const iconList = [iconCart, addButtonMore, addButtonLess]