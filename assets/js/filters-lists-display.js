// Display one list arrow clicked
function displayFiltersListOnArrowClicked(arrowClicked) {
    eraseInputs();
    let filtersListElt = getFiltersListToDisplay(arrowClicked);// return a div.filter elt
    if(!filtersListElt.className.includes("filter--visible")) {
        makeFiltersListNonVisible();
        makeFiltersListVisible(filtersListElt, arrowClicked);
    } else {
        makeFiltersListNonVisible()
    }
}

// Display list on user input
function displayFiltersListonUserInput(inputValue, inputEltUsed, filterName) {
    makeFiltersListNonVisible();
    eraseInputOrNot(inputEltUsed);
    updateFiltersListsWithInput(inputValue, inputEltUsed, filterName);
    appendNewFiltersLists();
    let arrowElt = inputEltUsed.nextElementSibling;
    let filtersEltList = inputEltUsed.closest("div.filter");
    makeFiltersListVisible(filtersEltList, arrowElt);
}


function eraseInputs() {
    let inputs = document.querySelectorAll("input.filter__input");
    for (let input of inputs) {        
        input.value = null;
    }
}

function getFiltersListToDisplay(eltClicked) {
    let filtersList = eltClicked.closest("div.filter");
    return filtersList;
}

function makeFiltersListNonVisible() {
    let filtersListElts = document.querySelectorAll("div.filter");
    for (let filtersListElt of filtersListElts) {
        if(filtersListElt.className.includes("filter--visible")) {
            filtersListElt.classList.remove("filter--visible");
            let iconElt = filtersListElt.querySelector("i.filter__icon");
            iconArrowChangeToDown(iconElt);
        }
    }
}

function makeFiltersListVisible(filtersListElt, arrowClicked) {
        filtersListElt.classList.add("filter--visible");
        iconArrowChangeToUp(arrowClicked);
}

// Change arrow down <-> up
function iconArrowChangeToUp(arrowIcon) {
    arrowIcon.classList.remove('fa-chevron-down');
    arrowIcon.classList.add('fa-chevron-up');
}

function iconArrowChangeToDown (iconElt) {
    iconElt.classList.remove('fa-chevron-up');
    iconElt.classList.add('fa-chevron-down');
}


// erase input depends on key pressed on new input or not
function eraseInputOrNot(inputUsed) {
    let inputs = document.querySelectorAll("input.filter__input");
    if (inputUsed.value === "") {
        for (let input of inputs) {        
            input.value = null;
        }
    }
}

// Display the html filters list after search by tag
function appendNewFiltersLists() {
    removeActualHtmlList();
    createAndAppendAllFiltersList();
    userClickOnItem();
}

// Create and append html filters list

// Create and append the 3 filters list
function createAndAppendAllFiltersList() {
    createAndAppendIngredientsList();
    createAndAppendAppliancesList();
    createAndAppendUtensilsList();
}

function createAndAppendIngredientsList() {
    for (let item of filterIngredientsList) {  
        createAndAppendHtmlBlock("filter-ingredients", item);
    }
}

function createAndAppendAppliancesList() {
    for (let item of filterAppliancesList) {  
        createAndAppendHtmlBlock("filter-appareils", item);
    }
}

function createAndAppendUtensilsList() {
    for (let item of filterUtensilsList) {  
        createAndAppendHtmlBlock("filter-ustensiles", item);
    }
}

function createAndAppendHtmlBlock(className, itemName) {
    const ul = document.querySelector("ul." + className);
    createFilterItemHtmlBlock(itemName, ul);
}

function createFilterItemHtmlBlock(itemName, ul) {
    let item = document.createElement("p");
    item.classList.add("filter__item-name")
    item.innerHTML = itemName;
    let li = document.createElement("li");
    li.classList.add("filter__item");
    li.append(item);
    ul.append(li);
}

// Remove a filters List from html
function removeActualHtmlList() {
    let uls = document.querySelectorAll("ul.filter__items-list");
    for (let ul of uls) {
        ul.innerHTML = "";
    }
}


 
createAndAppendAllFiltersList();
