
// Update list from user inut in filters List input field
function updateFiltersListsWithInput(inputValue, inputElt, filterName) {
    let tags = document.querySelectorAll("li.item-selected");
    let receipesList = [];
    if (tags.length > 0) {
        receipesList = newReceipesList;
    } else {
        receipesList = determinateReceipesList();
    }
    switch (filterName) {
        case "ingredients" :
            generateIngredientsListFromReceipesList(receipesList);
            filterIngredientsList = generateItemsListFromInput(filterIngredientsList, inputValue);            
            break;
        case "appareils" :
            generateAppliancesListFromReceipesList(receipesList);          
            filterAppliancesList = generateItemsListFromInput(filterAppliancesList, inputValue);  
            break;
        case "ustensiles" :
            generateUtensilsListFromReceipesList(receipesList);
            filterUtensilsList = generateItemsListFromInput(filterUtensilsList, inputValue);
            break;
    }
}

function generateItemsListFromInput(list, inputValue) {
    let tempList = [];
    for (let elt of list) {
        let string = elt.toLowerCase();
        if (string.includes(inputValue.toLowerCase())) {
            tempList.push(elt);
        }
    }
    return tempList;
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

// Remove tag selected from filterList to display 
function removeTagFromList() {
    let tags = document.querySelectorAll("li.item-selected");
    for (let tag of tags) {
        let tagClasses = tag.className;
        let tagName = tag.firstElementChild.innerText;
        if (tagClasses.includes("item-selected--filter1")) {
            index = filterIngredientsList.indexOf(tagName);
            filterIngredientsList.splice(index, 1);
        }
        if (tagClasses.includes("item-selected--filter2")) {
            index = filterAppliancesList.indexOf(tagName);
            filterAppliancesList.splice(index, 1);
        }
        if (tagClasses.includes("item-selected--filter3")) {
            index = filterUtensilsList.indexOf(tagName);
            filterUtensilsList.splice(index, 1);
        }
    }
}

generateAllFiltersList(determinateReceipesList());







