

function displayReceipes(receipesList) {
    removeThumb();
    for (let receipe of receipesList) {
        let receipeName = receipe.name;
        let receipeDescription = receipe.description;
        let receipeTime = receipe.time;
        let receipeId = receipe.id;
        createReceipeHtmlBlock(receipeName, receipeTime, receipeDescription, receipeId);
        for (let ingredient of receipe.ingredients) {
            createIngredientsHtmlBlock(ingredient.ingredient, ingredient.quantity, ingredient.unit, receipeId);
        }
    }
}

function createElement(htmlTag, className) {
    let elt = document.createElement(htmlTag);
    elt.classList.add(className);
    return elt;
}

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

function createIngredientsHtmlBlock(ingredient, quantity, unit, receipeId) {
    let thumbIngredient = createElement("li", "thumb__igredient");
        if (quantity === undefined) {
            thumbIngredient.innerHTML = "<strong>" + ingredient + "</strong>";
        } else if (quantity != undefined && unit === undefined){
            thumbIngredient.innerHTML = "<strong>" + ingredient + ":</strong> " + quantity;
        } else {
            unit = rewriteUnit(unit);
            thumbIngredient.innerHTML = "<strong>" + ingredient + ":</strong> " + quantity + unit;
        }
    document.querySelector("ul.receipe-" + receipeId).append(thumbIngredient);
}

function rewriteUnit(unit) {
    switch(unit) {
        case "grammes":
          unit = "g";
          break;
        case "cuill??res ?? soupe":
          unit = " cuill??res"
          break;
        default:
          unit;
      }
    return unit;
}

// Remove receipe thumb from page
function removeThumb() {
    let thumbs = document.querySelectorAll("div.thumb");
    thumbs.forEach(thumb => thumb.remove());
}

displayReceipes(determinateReceipesList());






