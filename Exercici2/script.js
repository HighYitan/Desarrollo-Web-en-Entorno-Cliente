document.addEventListener("DOMContentLoaded", function(){
    fetch("./articles.json").then(response => response.json()).then(data =>{
        console.log(data);
        const section = document.getElementsByClassName("product-grid");
        data.productGrid.forEach(article => {
            const articleContainer = document.createElement("article");
            articleContainer.className = "card";
            const info1 = document.createElement("div");
            info1.className = "info-1";
            const image = document.createElement("img");
            image.src = article.imatge;
            image.alt = "";
            const name = document.createElement("h3");
            name.textContent = article.nom;
            const description = document.createElement("h4");
            description.textContent = article.descripcio;
            const info2 = document.createElement("div");
            info2.className = "info2";
            const starContainer = document.createElement("div");
            starContainer.className = "showcase-rating";
            //const star = document.createElement("i");
            //star.className = "fa-solid fa-star";
            //const starGrey = document.createElement("i");
            //starGrey.className = "fa-solid fa-star grey-star";
            const priceContainer = document.createElement("div");
            priceContainer.className = "price-box";
            const discountedPrice = document.createElement("p");
            discountedPrice.className = "price";
            discountedPrice.textContent = ((article.preu * (1 - article.descompte / 100)).toFixed(2) + "€");
            const price = document.createElement("del");
            price.textContent = (article.preu + "€");
            const add = document.createElement("button");
            add.textContent = "Add";
            const favouriteContainer = document.createElement("div");
            favouriteContainer.className = "favorite";
            const favourite = document.createElement("i");
            favourite.className = "fa-solid fa-heart";
            section[0].appendChild(articleContainer);
            articleContainer.appendChild(info1);
            articleContainer.appendChild(info2);
            articleContainer.appendChild(favouriteContainer);
            info1.appendChild(image);
            info1.appendChild(name);
            info1.appendChild(description);
            info2.appendChild(starContainer);
            info2.appendChild(priceContainer);
            for(var i = 0; i < 5; i++){
                if(i < article.puntuacio){
                    const star = document.createElement("i");
                    star.className = "fa-solid fa-star";
                    starContainer.appendChild(star);
                }
                else{
                    const starGrey = document.createElement("i");
                    starGrey.className = "fa-solid fa-star grey-star";
                    starContainer.appendChild(starGrey);
                }
            }
            priceContainer.appendChild(discountedPrice);
            if(article.descompte > 0){
                priceContainer.appendChild(price);
            }
            priceContainer.appendChild(add);
            favouriteContainer.appendChild(favourite);
        });
        var favEvents = document.getElementsByClassName("fa-solid fa-heart");
        console.log(favEvents.length);
        for (var i = 1; i < favEvents.length; i++){
            favEvents[i].addEventListener('click', addFavourite, false);
        }
        function addFavourite(){
            console.log("Nigger");
            //this.style.color = "#39009d";
            this.classList.toggle("fa-regular");
        }

        var filter = document.querySelectorAll("a[data-puntuacio]");
        console.log(filter.length);
        var counter = 0;
        for(counter; counter < filter.length; counter++){
            filter[counter].addEventListener('click', filtering, false);
        }
        function filtering(){
            var showcase = document.getElementsByClassName("showcase-rating");
            //console.log(showcase.length);
            for(var i = 0; i < showcase.length; i++){
                var children = showcase[i].getElementsByTagName("i");
                //console.log(children.length);
                var score = 0;
                for(var j = 0; j < children.length; j++){
                    if(!(children[j].classList.contains("grey-star"))){
                        score++;
                        console.log(score);
                    }
                    //var score = children[j].getElementsByClassName("fa-star");
                    
                }
                //score
                showcase[i].style.display = 'none';
                console.log("kekw");
                switch(this){
                    case 'zero':
                        showcase[i].style.display = 'block';
                        console.log("lol");
                        break;
                }
            }

            
        }
    }).catch(error => console.error("Error fetching JSON article:", error));
})