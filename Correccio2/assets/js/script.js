let state = {
    products: [],
    filteredProducts: [],
    favorites: []
};

function loadState(){
    const stateStorage = localStorage.getItem("state");
    if(stateStorage){
        state = JSON.parse(stateStorage);
    }
}

function saveState(){
    localStorage.setItem("state", JSON.stringify(state));
}

async function loadProducts(){
    try{
        const response = await fetch("./assets/data/articles.json");
        const data = await response.json();
        state.products = data;
        renderProducts(state.products);
    }
    catch(error){
        alert(error);
    }
}

function renderProducts(products){
    var productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = "";
    for(let product of products){
        // Posar algo de si es favorit
        const reducedPrice = (product.preu * (1 - product.descompte / 100)).toFixed(2);
        const productCard = `
        <article class="card">
          <div class="info-1">
            <img src="${product.imatge}" alt="${product.nom}">
            <h3>${product.nom}</h3>
            <h5>${product.puntuacio}</h5>
            <h4>${product.descripcio}</h4>
          </div>
          <div class="info2">
            <div class="price-box">
              <p class="price">${reducedPrice} &euro; ${product.descompte? `<del>${product.preu} &euro;</del>`: ""} </p>
              <button>Add</button>
            </div>
          </div>
          <div class="favorite">
              <i class="fa-solid fa-heart"></i>
          </div>
        </article>
        `;
        productGrid.innerHTML += productCard;
    }
}

function filter(){
       
}

function init(){
    loadProducts();
}

document.addEventListener("DOMContentLoaded", init);