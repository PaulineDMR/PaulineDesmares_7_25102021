
// FUNCTIONS
function searchByTag(tagName, filterName, receipesList) {    
    FindReceipesWithTag(filterName, tagName, receipesList);
    generateNewReceipesListFromTagSearch();
    displayReceipes(newReceipesList);
    generateAllFiltersList(newReceipesList);
    displayTag(tagName, filterName);
    removeTagFromList();
    removeActualHtmlList();
    createAndAppendAllFiltersList();
    userClickOnItem();
}

function updateResultsFromTagRemoved(receipesList) {
    let tags = document.querySelectorAll("li.item-selected");
    console.log(tags);
    console.log(tags.length);
    // ajouter quoi faire si tag.length === 0
    for (let tag of tags) {
        //ecrire le parcours et la remise à zero des listes pour comprendre
        let tagName = tag.firstElementChild.innerText;
        let filterName = getFilterNameOfTag(tag);
        FindReceipesWithTag(filterName, tagName, receipesList);
        generateNewReceipesListFromTagSearch();
        displayReceipes(newReceipesList);
        generateAllFiltersList(newReceipesList);
        removeActualHtmlList();
        createAndAppendAllFiltersList();
        userClickOnItem();
    }
}


//find receipes depends of filter type
function FindReceipesWithTag(filterName, filter, receipesList) {
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

function getFilterNameOfTag(tag) {
    let tagClasses = tag.className;
    if (tagClasses.includes("item-selected--filter1")) {
        return "ingredients";
    }
    if (tagClasses.includes("item-selected--filter2")) {
        return "appliance";
    }
    if (tagClasses.includes("item-selected--filter3")) {
        return "ustensils";
    }
}
