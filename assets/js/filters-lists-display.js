// Display one list clicked
function displayFiltersList(filterName) {
    switch (filterName) {
        case "filter-ingredients" :
            displayUl(filterName);
            break;
        case "filter-appareils" :
            displayUl(filterName);
            break;
        case "filter-ustensiles" :
            displayUl(filterName);
            break;
    }
}

// Display ul.class-name elt
function displayUl(className) {
    const ul = document.querySelector("ul." + className);
    ul.style.display = "flex";
}

// Display the html filters list after search by tag
function displayNewFiltersLists() {
    removeActualHtmlList();
    createAndAppendAllFiltersList();
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




// Get 3 filters list from receipes list
function generateAllFiltersList(receipesList) {
    generateIngredientsListFromReceipesList(receipesList);
    generateAppliancesListFromReceipesList(receipesList);
    generateUtensilsListFromReceipesList(receipesList);
}

function generateIngredientsListFromReceipesList(receipesList) {
    filterIngredientsList = [];
    for (let receipe of receipesList) {
        for (let ingredient of receipe.ingredients) {
            if (!filterIngredientsList.includes(ingredient.ingredient)) {
                filterIngredientsList.push(ingredient.ingredient);                
            }
        }
    }
    filterIngredientsList.sort();
}

function generateAppliancesListFromReceipesList(receipesList) {
    filterAppliancesList = [];
    for (let receipe of receipesList) {
        if (!filterAppliancesList.includes(receipe.appliance)) {
            filterAppliancesList.push(receipe.appliance);            
        }
    }
    filterAppliancesList.sort();
}

function generateUtensilsListFromReceipesList(receipesList) {
    filterUtensilsList = [];
    for (let receipe of receipesList) {
        for (let utensil of receipe.ustensils) {
            if (!filterUtensilsList.includes(utensil)) {
                filterUtensilsList.push(utensil);
            }
        }
    }
    filterUtensilsList.sort();
}
    

// Remove a filters List from html
function removeActualHtmlList() {
    let uls = document.querySelectorAll("ul.filter__items-list");
    for (let ul of uls) {
        ul.innerHTML = "";
    }
}



generateAllFiltersList(determinateReceipesList());
createAndAppendAllFiltersList();
