let state = {
    products: [],
    filteredProducts: [],
    scoreFilteredProducts: [],
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
        loadState();
        state.products = data;

        state.filteredProducts = [...data];
        state.scoreFilteredProducts = [...data];
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
        const isFavorite = state.favorites.includes(product.id);
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
              <i class="fa-${isFavorite?`solid`:`regular`} fa-heart" data-id="${product.id}"></i>
          </div>
        </article>
        `;
        productGrid.innerHTML += productCard;
    }

    //Attach event listeners to favorite icons
    document.querySelectorAll(".favorite").forEach(icon =>{
        icon.addEventListener('click', toggleFavorite);
    });
}

/*function filter(){
    const showcase = document.getElementsByClassName("showcase-rating");
    for(var i = 0; i < showcase.length; i++){
        for(const child of showcase[i]){
            //child.addEventListener('click', filter);
            var score = child.innerHTML;
        }
    }
    switch(this.innerHTML){
        case 0:

    }
}*/

function filterByScore(score){
    if(score == "Tot"){
        scoreFilteredProducts = [...state.products];
        return (state.filteredProducts = [...state.products]);
    }
    else{
        state.filteredProducts = state.products.filter(product => product.puntuacio == Number(score));
        scoreFilteredProducts = [...state.filteredProducts];
        return state.filteredProducts;
    }
}

function toggleFavorite(){
    const productId = Number(event.target.dataset.id);
    const index = state.favorites.indexOf(productId);

    if(index == -1){
        state.favorites.push(productId);
    }
    else{
        state.favorites.splice(index, 1);
    }
    saveState();
    renderProducts(state.filteredProducts);
}

function searchDescription(){
    const productGrid = document.querySelector(".product-grid");
    const search = document.querySelector(".search-container input");
    state.filteredProducts = state.scoreFilteredProducts.filter(product => product.descripcio.toLowerCase().includes(search.value.toLowerCase()));

    if(state.filteredProducts.length == 0){
        productGrid.innerHTML = "There are no prodructs that meet your search criteria.";
    }
    else{
        renderProducts(state.filteredProducts);
    }
}

function showFavorites(){
    /*document.querySelectorAll("favorite i").forEach(link =>{
        link.addEventListener('click')
    }*/
    state.filteredProducts = state.products.filter(product => state.favorites.includes(product.id));
    renderProducts(state.filteredProducts);
}

function showNonFavorites(){
    state.filteredProducts = state.products.filter(product => !state.favorites.includes(product.id));
    renderProducts(state.filteredProducts);
}

function resetAll(){
    state.filteredProducts = [...state.products];
    state.scoreFilteredProducts = [...state.products];
    state.favorites = [];
    renderProducts(state.filteredProducts);
}

function init(){
    document.querySelectorAll(".main-nav a").forEach(boto =>{
        boto.addEventListener('click', event =>{
            event.preventDefault();
            const score = event.target.textContent;
            const filteredProducts = filterByScore(score);
            renderProducts(filteredProducts);
        });
    });

    document.querySelector(".icons-container .fa-solid.fa-heart").addEventListener('click', showFavorites);
    document.querySelector(".icons-container .fa-regular.fa-heart").addEventListener('click', showNonFavorites);
    document.querySelector(".fa-eraser").addEventListener('click', resetAll);

    document.querySelector(".search-container").addEventListener('keyup', searchDescription);
    /*const mainNav = document.getElementsByClassName("main-nav");
    for(const child of mainNav[0].children){
        child.addEventListener('click', filter);
    }*/
    loadProducts();
}

document.addEventListener("DOMContentLoaded", init);