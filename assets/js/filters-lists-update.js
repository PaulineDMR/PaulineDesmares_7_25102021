    
function updateFiltersList(inputElt, keyPressed) {
    filterIngredientsList = [];
    filterAppliancesList = [];
    filterUtensilsList = [];
    let inputValue = determinateInputValue(inputElt, keyPressed);
    let filterName = getFilterName(inputElt);
    compareInputToReceipeslist(determinateReceipesList(), filterName, inputValue);
    removeActualHtmlList();
    displayFiltersList(filterName);  
}

function determinateInputValue(inputElt, keyPressed) {
    if(keyPressed === "Backspace") {
        return  inputElt.value.substring(0, inputElt.value.length - 1);
    } else {
        return inputElt.value + keyPressed;
    }
}

function getFilterName(inputElt) {
    switch (inputElt.id) {
        case "ingredients" :
            return "filter-ingredients";
        case "appareils" :
            return "filter-appareils";
        case "ustensiles" :
            return "filter-ustensiles";
    }
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

function removeActualHtmlList() {
    let uls = document.querySelectorAll("ul.filter__items-list");
    for (let ul of uls) {
        ul.innerHTML = "";
    }
}

// Event : User enter a value

function userInputValue() {
    let inputsElt = document.querySelectorAll("input.filter__input");
    for (let elt of inputsElt) {
        elt.addEventListener("keydown", function(e) {
            updateFiltersList(elt, e.key);
        });
    }
}





