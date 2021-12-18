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
    //close filters list OU affiche liste en cours
    //display filters List in html
    //Display a tag equal to the item clicked
    console.log(searchStatus);
    console.log(newReceipesList);
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

// EVENTS

//On click on a item from a list
function userClickOnItem() {
    let elts = document.querySelectorAll("p.filter__item-name");
    for (let elt of elts) {
        elt.addEventListener("click", function() {
            console.log("click");
            let filterName = getFilterName(elt);
            let receipesList = determinateReceipesList();
            searchByTag(elt, filterName, receipesList);
        });
    }
}






//On click on the close cross of the tag
// -> Define which element it is
//display receipes which correspond
// -> update search status
// Si il reste des tags "receipes found"
// Si il n'y en a plus
// Si il y a une recherche principal
// -> update newreceipesList
//Update filters list
//Remove the tag

