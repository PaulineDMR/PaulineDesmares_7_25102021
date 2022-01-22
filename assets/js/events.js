
// User enter a value in the main search field
function userPressKeyInMainSearch() {
    let inputElt = document.querySelector("input.main-search__input");
    inputElt.addEventListener("keydown", function(e) {
        let inputValue = getUserInputValue(inputElt, e.key);
        if (inputValue.length >= 3) {
            searchByUserInput(inputValue);
        } else {
            removeThumb();
            displayReceipes(recipes);
        }
    });
}

userPressKeyInMainSearch();

function getUserInputValue(inputElt, keyPressed) {
    if(keyPressed === "Backspace") {
        return  inputElt.value.substring(0, inputElt.value.length - 1);
    } else {
        return inputElt.value + keyPressed;
    }
}


// On click filters btn
function onClickFilterArrowIcon() {
    let btnList = document.querySelectorAll("i.filter__icon");
    for (let elt of btnList) {
        elt.addEventListener("click", function(e) {
            displayFiltersListOnArrowClicked(e.target);
        });
    }
}

onClickFilterArrowIcon();

// Event : User enter a value in a tag field
function userInputValue() {
    let inputsElt = document.querySelectorAll("input.filter__input");
    for (let elt of inputsElt) {
        elt.addEventListener("keydown", function(e) {
            let inputValue = getUserInputValue(elt, e.key);
            let filterName = e.target.id;
            displayFiltersListonUserInput(inputValue, e.target, filterName);
        });
    }
}

/*function getFilterNameFromUserInput(inputElt) {
    switch (inputElt.id) {
        case "ingredients" :
            return "filter-ingredients";
        case "appareils" :
            return "filter-appareils";
        case "ustensiles" :
            return "filter-ustensiles";
    }
}*/

userInputValue();

//On click on a item from a list
function userClickOnItem() {
    let elts = document.querySelectorAll("p.filter__item-name");
    for (let elt of elts) {
        elt.addEventListener("click", function() {
            let tagName = getTagNameOnClick(elt);
            let filterName = getFilterDesignOnClick(elt);
            let receipesList = determinateReceipesList();
            displayTag(tagName, filterName);
            searchByTag(receipesList);
        });
    }
}

function getTagNameOnClick(itemClicked) {
    return itemClicked.innerText;
}

function getFilterDesignOnClick(itemClicked) {
    let elt = itemClicked.closest("ul.filter__items-list");
    let eltClasses = elt.className;
    if (eltClasses.includes("filter-ingredients")) {
        return "item-selected--filter1";
    }
    if (eltClasses.includes("filter-appareils")) {
        return "item-selected--filter2";
    }
    if (eltClasses.includes("filter-ustensiles")) {
        return "item-selected--filter3";
    }   
}

userClickOnItem();

// User clicks on the cross of the tag
function userClicksOnCross(i, li) {
    // ajouter quoi faire si tag.length === 0
    i.addEventListener("click", function() {
        let receipesList = determinateReceipesList();
        li.remove();
        searchByTag(receipesList);        
    });
}