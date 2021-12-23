// On click filters btn
function onClickFilterBtn() {
    let btnList = document.querySelectorAll("i.filter__icon");
    for (let elt of btnList) {
        elt.addEventListener("click", function(e) {
            let filter = e.target.dataset.filterName;
            displayFiltersList(filter);
        });
    }
}

onClickFilterBtn();

// Event : User enter a value

function userInputValue() {
    let inputsElt = document.querySelectorAll("input.filter__input");
    for (let elt of inputsElt) {
        elt.addEventListener("keydown", function(e) {
            let inputValue = getUserTagInputValue(elt, e.key);
            let filterName = getFilterNameFromUserInput(elt);
            updateFiltersList(inputValue, filterName);
        });
    }
}

function getUserTagInputValue(inputElt, keyPressed) {
    if(keyPressed === "Backspace") {
        return  inputElt.value.substring(0, inputElt.value.length - 1);
    } else {
        return inputElt.value + keyPressed;
    }
}

function getFilterNameFromUserInput(inputElt) {
    switch (inputElt.id) {
        case "ingredients" :
            return "filter-ingredients";
        case "appareils" :
            return "filter-appareils";
        case "ustensiles" :
            return "filter-ustensiles";
    }
}

userInputValue();

//On click on a item from a list
function userClickOnItem() {
    let elts = document.querySelectorAll("p.filter__item-name");
    for (let elt of elts) {
        elt.addEventListener("click", function() {
            let tagName = getTagNameOnClick(elt);
            let filterName = getFilterNameOnClick(elt);
            let receipesList = [];
            receipesList = whichReceipesList();
            searchByTag(tagName, filterName, receipesList);
        });
    }
}

function getTagNameOnClick(itemClicked) {
    return itemClicked.innerText;
}

function getFilterNameOnClick(itemClicked) {
    let elt = itemClicked.closest("ul.filter__items-list");
    let eltClasses = elt.className;
    if (eltClasses.includes("filter-ingredients")) {
        return "ingredients";
    }
    if (eltClasses.includes("filter-appareils")) {
        return "appliance";
    }
    if (eltClasses.includes("filter-ustensiles")) {
        return "ustensils"
    }   
}

userClickOnItem();

// User clicks on the cross of the tag
function userClicksOnCross() {
    let elts = document.querySelectorAll("i.item-selected__icon");
    for (let elt of elts) {
        elt.addEventListener("click", function() {
            let tag = elt.closest("li.item-selected");
            let receipesList = [];
            receipesList = determinateReceipesList();
            tag.remove();
            updateResultsFromTagRemoved(receipesList);
        });
    }
}


