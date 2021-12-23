sessionStorage.clear(); // sessionStorage.length = 0
// FUNCTIONS
function searchByTag(tagName, filterName, receipesList) {    
    FindReceipeswithTag(filterName, tagName, receipesList);
    generateNewReceipesListFromTagSearch();
    displayReceipes(newReceipesList);
    generateAllFiltersList(newReceipesList);
    removeTagFromList(tagName, filterName);
    removeActualHtmlList();
    createAndAppendAllFiltersList();
    displayTag(tagName, filterName);
    userClickOnItem();
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
}

//Find receipes with ingredient tag
function findReceipesWithIngredient(ingredientFilter, receipesList) {
    filteredReceipesIdFromTag = [];
    for (let receipe of receipesList) {
        for (let ingredient of receipe.ingredients) {
            if(ingredient.ingredient === ingredientFilter) {
                filteredReceipesIdFromTag.push(receipe.id);
            }
        }
    }  
}

//Find receipes with appliance tag
function findReceipesWithAppliance(applianceFilter, receipesList) {
    filteredReceipesIdFromTag = [];
    for (let receipe of receipesList) {
        if (receipe.appliance === applianceFilter) {
            filteredReceipesIdFromTag.push(receipe.id);
        }
    }
}

//Find receipes with utensil tag
function findReceipesWithUtensil(utensilFilter, receipesList) {
    filteredReceipesIdFromTag = [];
    for (let receipe of receipesList) {
        for (let utensil of receipe.ustensils) {
            if(utensil === utensilFilter) {
                filteredReceipesIdFromTag.push(receipe.id);
            }
        }
    }  
}


// Add tag name to session storage
function addTagNameToSession(tagName, typeOfFilter) {
    let key = tagName;
    let value = typeOfFilter;
    sessionStorage.setItem(key, value);
    console.log(sessionStorage.getItem(key));
}














