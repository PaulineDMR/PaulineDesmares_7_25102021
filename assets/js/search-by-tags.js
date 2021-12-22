sessionStorage.clear();

// FUNCTIONS
function searchByTag(itemClicked, filterName, receipesList) {
    let itemName = itemClicked.innerText;
    FindReceipeswithTag(filterName, itemName, receipesList);
    generateNewReceipesList();
    displayReceipes(newReceipesList);
    generateAllFiltersList(newReceipesList);
    removeActualHtmlList();
    createAndAppendAllFiltersList();
    displayTag(itemName, filterName);
    userClickOnItem();
    addTagNameToSession(itemName, filterName);
    userClicksOnCross();
}

//find receipes depends of filter type
function FindReceipeswithTag(filterName, filter, receipesList) {
    switch (filterName) {
        case 'ingredients' :
            findReceipesWithIngredient(filter, receipesList);
            break;
        case 'appliance' :
            findReceipesWithAppliance(filter, receipesList);
            break;
        case 'ustensils' :
            findReceipesWithUtensil(filter, receipesList);
        break;
    }
    searchStatus = "Receipes found";
}

//Find receipes with ingredient tag
function findReceipesWithIngredient(ingredientFilter, receipesList) {
    filteredReceipesId = [];
    for (let receipe of receipesList) {
        for (let ingredient of receipe.ingredients) {
            if(ingredient.ingredient === ingredientFilter) {
                filteredReceipesId.push(receipe.id);
            }
        }
    }  
}

//Find receipes with appliance tag
function findReceipesWithAppliance(applianceFilter, receipesList) {
    filteredReceipesId = [];
    for (let receipe of receipesList) {
        if (receipe.appliance === applianceFilter) {
            filteredReceipesId.push(receipe.id);
        }
    }
}

//Find receipes with utensil tag
function findReceipesWithUtensil(utensilFilter, receipesList) {
    filteredReceipesId = [];
    for (let receipe of receipesList) {
        for (let utensil of receipe.ustensils) {
            if(utensil === utensilFilter) {
                filteredReceipesId.push(receipe.id);
            }
        }
    }  
}

//determinate type of filter: ingredients, appliance, utensils
function getFilterName(itemClicked) {
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

// Add tag name to session storage
function addTagNameToSession(tagName, typeOfFilter) {
    let key = tagName;
    let value = typeOfFilter;
    sessionStorage.setItem(key, value);
    console.log(sessionStorage.getItem(key));
}














