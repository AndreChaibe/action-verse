const actionFiguresContent = [
    {
        image: "./src/images/img-Luffy-gear-5-Action-Figure.jpg",
        name: "AF Luffy - gear 5",
        price: 280.50,
        universe: "One piece"
    },
    {
        image: "./src/images/img-mago-negro-Action-Figure.jpg",
        name: "AF Mago Negro",
        price: 150.20,
        universe: "Yu-Gi-Oh"
    },
    {
        image: "./src/images/img-Yusuke-Action-Figure.webp",
        name: "AF Yusuke Urameshi",
        price: 87.24,
        universe: "Yu Yu Hakusho"
    },
    {
        image: "./src/images/img-cavaleiro-Action-Figure.webp",
        name: "AF Cavaleiro",
        price: 180.39,
        universe: "Dark Souls"
    },
    {
        image: "./src/images/img-Gon-Action-Figure.jpg",
        name: "AF Gon Freecss",
        price: 110.90,
        universe: "Hunter X Hunter"
    },
    {
        image: "./src/images/img-Sonic-Action-Figure.webp",
        name: "AF Sonic",
        price: 48.00,
        universe: "Sonic"
    },
    {
        image: "./src/images/img-Shikamaru-Action-Figure.jpg",
        name: "AF Shikamaru Nara",
        price: 120.50,
        universe: "Naruto"
    },
    {
        image: "./src/images/img-Hornet-Action-Figure.jpg",
        name: "AF Honert",
        price: 94.00,
        universe: "Hollow Knight"
    },
    {
        image: "./src/images/img-deadpool-Action-Figure.avif",
        name: "AF Deadpool",
        price: 210.00,
        universe: "Deadpool"
    }
]

function counter() {
    const quantityCounter = 1;
    const quantitytems = document.createElement('span');
    quantitytems.className = 'quantity-counter';
    quantitytems.textContent = quantityCounter;
    return quantitytems
}


export { actionFiguresContent, counter }