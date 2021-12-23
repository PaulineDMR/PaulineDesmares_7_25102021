    
function updateFiltersList(inputValue, filterName) {
    filterIngredientsList = [];
    filterAppliancesList = [];
    filterUtensilsList = [];
    let receipesListToCompare = whichReceipesList();
    compareInputToReceipeslist(receipesListToCompare, filterName, inputValue);
    removeActualHtmlList();
    displayFiltersList(filterName);  
}

// Compare input to receipe
function compareInputToReceipeslist(receipesList, filterName, inputValue) {
    newReceipesList= [];
    switch (filterName) {
        case "filter-ingredients" :
            compareIngredientInputToFiltersList(receipesList, inputValue);
            break;
        case "filter-appareils" :
            compareApplianceInputToFiltersList(receipesList, inputValue);
            break;
        case "filter-ustensiles" :
            compareUtensilInputToFiltersList(receipesList, inputValue);
            break;
    }
}

function compareIngredientInputToFiltersList(receipesList, inputValue) {
    filterIngredientsList = [];
    for (let receipe of receipesList) {
        for (let ingredient of receipe.ingredients) {
            let ingredientName = ingredient.ingredient.toLowerCase();
            console.log(ingredientName);
            if(ingredientName.includes(inputValue.toLowerCase())) {
                if (!filterIngredientsList.includes(ingredient.ingredient)) {
                    filterIngredientsList.push(ingredient.ingredient);                
                }
                newReceipesList.push(receipe);
            }
        }
    }
    filterIngredientsList.sort();
    generateAppliancesListFromReceipesList(newReceipesList);
    generateUtensilsListFromReceipesList(newReceipesList);
}

function compareApplianceInputToFiltersList(receipesList, inputValue) {
    filterAppliancesList = [];
    for (let receipe of receipesList) {
        let applianceName = receipe.appliance.toLowerCase();
            if(applianceName.includes(inputValue.toLowerCase())) {
                if (!filterAppliancesList.includes(receipe.appliance)) {
                    filterAppliancesList.push(receipe.appliance);                
                }
                newReceipesList.push(receipe);
            }
        }
    filterAppliancesList.sort();
    generateIngredientsListFromReceipesList(newReceipesList);
    generateUtensilsListFromReceipesList(newReceipesList);
}

function compareUtensilInputToFiltersList(receipesList, inputValue) {
    filterUtensilsList = [];
    for (let receipe of receipesList) {
        for (let utensil of receipe.ustensils) {
            let utensilName = utensil.toLowerCase();
            if(utensilName.includes(inputValue.toLowerCase())) {
                if (!filterUtensilsList.includes(utensil)) {
                    filterUtensilsList.push(utensil);                
                }
                newReceipesList.push(receipe);
            }
        }
    }
    filterUtensilsList.sort();
    generateIngredientsListFromReceipesList(newReceipesList);
    generateAppliancesListFromReceipesList(newReceipesList);
}

// Remove tag selected from filterList to display 
function removeTagFromList(itemClicked, filterType) {
    let tags = document.querySelectorAll("li.item-selected");
    let index;
    switch (filterType) {
        case "ingredients" :
            index = filterIngredientsList.indexOf(itemClicked);
            filterIngredientsList.splice(index, 1);
            break;
        case "appliance" :
            index = filterAppliancesList.indexOf(itemClicked);
            filterAppliancesList.splice(index, 1);
            break;
        case "ustensils" :
            index = filterUtensilsList.indexOf(itemClicked);
            filterUtensilsList.splice(index, 1);
            break;
    }
}

filterIngredientsList = [];
filterAppliancesList = [];
filterUtensilsList = [];







