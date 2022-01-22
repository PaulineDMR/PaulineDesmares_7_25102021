

function searchByTag(receipesList) {
    let tags = document.querySelectorAll("li.item-selected");
    if (tags.length > 0) {
        for (let tag of tags) {
            let tagName = tag.firstElementChild.innerText;
            let filterName = getFilterNameOfTag(tag);
            filterReceipesWithTag(filterName, tagName, receipesList);
            receipesList = newReceipesList;
        }
        displayReceipes(newReceipesList);
        generateAllFiltersList(newReceipesList);
        TagSearchStatus = "Receipes found";
    } else {
        TagSearchStatus = "No search";
        displayReceipes(receipesList);
        generateAllFiltersList(receipesList);
    }   
    removeTagFromList();
    appendNewFiltersLists();
}

//filter receipes depends of filter type
function filterReceipesWithTag(filterName, filter, receipesList) {
    switch (filterName) {
        case 'ingredients' :
            filterReceipesWithIngredient(filter, receipesList);
            break;
        case 'appliance' :
            filterReceipesWithAppliance(filter, receipesList);
            break;
        case 'ustensils' :
            filterReceipesWithUtensil(filter, receipesList);
            break;
    }
}

//Find receipes with ingredient tag
function filterReceipesWithIngredient(ingredientFilter, receipesList) {
    filteredReceipesIdFromTag = [];
    for (let receipe of receipesList) {
        for (let ingredient of receipe.ingredients) {
            if(ingredient.ingredient === ingredientFilter) {
                filteredReceipesIdFromTag.push(receipe.id);
            }
        }
    }
    generateNewReceipesListFromTagSearch();
}

//Find receipes with appliance tag
function filterReceipesWithAppliance(applianceFilter, receipesList) {
    filteredReceipesIdFromTag = [];
    for (let receipe of receipesList) {
        if (receipe.appliance === applianceFilter) {
            filteredReceipesIdFromTag.push(receipe.id);
        }
    }
    generateNewReceipesListFromTagSearch();
}

//Find receipes with utensil tag
function filterReceipesWithUtensil(utensilFilter, receipesList) {
    filteredReceipesIdFromTag = [];
    for (let receipe of receipesList) {
        for (let utensil of receipe.ustensils) {
            if(utensil === utensilFilter) {
                filteredReceipesIdFromTag.push(receipe.id);
            }
        }
    }
    generateNewReceipesListFromTagSearch();
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
