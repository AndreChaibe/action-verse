import { actionFiguresContent } from "./data.js";
import { iconList } from "./icon.js";

const actionFigureList = document.querySelector(".action-figure-list");
const localCart = document.querySelector(".container-cart");
export const DefaultButtonMessage = ` ${iconList[0].outerHTML} Adicionar ao Carrinho`

function renderList() {

    actionFiguresContent.forEach((_, index) => {
        const itens = {
            image: actionFiguresContent[index].image,
            name: actionFiguresContent[index].name,
            price: actionFiguresContent[index].price,
            universe: actionFiguresContent[index].universe,
        };

        let bodyItens = `<li class="itens">
                            <div class="action-figure">
                                <img class="img-action-figure" src="${itens.image}" alt="Imagem de action figure">
                                <button class="action-figure-button">${DefaultButtonMessage}</button>

                                <div class="action-figure-inform">
                                   <span class="name">${itens.name}</span>
                                   <span class="universe">${itens.universe}</span>
                                   <span class="price">${itens.price.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</span>
                                </div>
                            </div>
                            
                        </li>`

        actionFigureList.innerHTML += bodyItens;
    });
}

renderList()

function homeCart() {

    const emptyCartMessage = "Seus itens adicionados aparecerão aqui."
    const cart = `<div class="cart">
                                <span id="quantity-of-items">Seu carrinho (0)</span>
                                <div class="default-cart-content">
                                   <img id="illustration" src="./src/images/empty-cart-illustration.png" alt="ilustração de carrinho vazio">
                                   <span class="empty-cart-message">${emptyCartMessage}</span>
                                </div>
                    
                 </div>`

    localCart.innerHTML = cart;

}

homeCart()