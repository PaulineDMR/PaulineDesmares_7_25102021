console.log(recipes[0].id);

function getReceipesDetails() {
    for (let receipe of recipes) {
        let receipeName = receipe.name;
        let receipeDescription = receipe.description;
        let receipeTime = receipe.time;
        let receipeId = receipe.id;
        createReceipeHtmlBlock(receipeName, receipeTime, receipeDescription, receipeId);
        for (let ingredient of receipe.ingredients) {
            let thumbIngredient = createElement("li", "thumb__igredient");
            if(ingredient.unit === undefined) {
                thumbIngredient.innerHTML = "<strong>" + ingredient.ingredient + ":</strong> " + ingredient.quantity;
            } else {
                thumbIngredient.innerHTML = "<strong>" + ingredient.ingredient + ":</strong> " + ingredient.quantity + ingredient.unit;
            }
            
            document.querySelector("ul.receipe-" + receipeId).append(thumbIngredient);
            /*for(let detail of ingredient) {
                /*<li class="thumb__ingredient">Lait de coco</li><li class="thumb__ingredient">Lait de coco</li><li class="thumb__ingredient">Lait de coco</li><li class="thumb__ingredient">Lait de coco</li><li class="thumb__ingredient">Lait de coco</li>
            }  */
        }
    }
}

function createElement(htmlTag, className) {
    let elt = document.createElement(htmlTag);
    elt.classList.add(className);
    return elt;
}

/*function createAndInsertElement(htmlTag, className, parentElt) {
    let elt = createElement(htmlTag, className);
    parentElt.append(elt);
}*/

function createReceipeHtmlBlock(receipeName, receipeTime, receipeDescription, receipeId) {
    let receipesContainer = document.querySelector("section.receipes-container");
    let thumb = createElement("div", "thumb");
    receipesContainer.append(thumb);
    let thumbPictureContainer = createElement("div", "thumb__picture-container");
    thumb.append(thumbPictureContainer)
    let thumbImg = createElement("img", "thumb__img");
    thumbPictureContainer.append(thumbImg);
    let thumbDetails = createElement("div", "thumb__details");
    thumb.append(thumbDetails);
    let thumbHeader = createElement("div", "thumb__header");
    thumbDetails.append(thumbHeader);
    let thumbTitle = createElement("h2", "thumb__title");
    thumbTitle.innerHTML = receipeName;
    thumbHeader.append(thumbTitle);
    let thumbTime = createElement("p", "thumb__time");
    thumbHeader.append(thumbTime);
    thumbTime.innerHTML = '<i class="thumb__clock-icon far fa-clock"></i>' + receipeTime + " min";
    let thumbContent = createElement("div", "thumb__content");
    thumbDetails.append(thumbContent);
    let thumbIngredientsList = createElement("ul", "thumb__ingredients-list");
    thumbIngredientsList.classList.add("receipe-" + receipeId);
    thumbContent.append(thumbIngredientsList);
    let thumbDescription = createElement("p", "thumb__description");
    thumbDescription.innerHTML = receipeDescription;
    thumbContent.append(thumbDescription);
}


function displayAllReceipes() {
    getReceipesDetails()
}

displayAllReceipes();






