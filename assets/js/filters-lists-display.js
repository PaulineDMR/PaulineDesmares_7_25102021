// Display one list clicked
function displayFiltersList(eltClicked) {
    eraseInputs();
    makeFiltersListNonVisible();
    makeFiltersListVisible(eltClicked);
}

function eraseInputs() {
    let inputs = document.querySelectorAll("input.filter__input");
    for (let input of inputs) {        
        input.value = null;
    }
}

function makeFiltersListNonVisible() {
    let filtersLists = document.querySelectorAll("div.filter");
    for (let filtersList of filtersLists) {
        if(filtersList.className.includes("filter--visible")) {
            filtersList.classList.remove("filter--visible");
        }   
    }
}

function makeFiltersListVisible(eltClicked) {
    let filtersList = getFiltersListToDisplay(eltClicked);
    if(!filtersList.className.includes("filter--visible")) {
        filtersList.classList.add("filter--visible");
    }
}

function getFiltersListToDisplay(eltClicked) {
    let filtersList = eltClicked.closest("div.filter");
    //let filtersList = ancestor.children[1];
    return filtersList;
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
