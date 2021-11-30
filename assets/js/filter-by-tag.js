    
function updateFiltersList(inputElt, keyPressed) {
    filterIngredientsList = [];
    filterAppliancesList = [];
    filterUtensilsList = [];
    //si key vide l'enlever sinon le rajouter
    let inputValue = inputElt.value + keyPressed;
    inputValue = inputValue.toLowerCase();
    let filterName = getFilterName(inputElt);
    compareInputToReceipeslist(determinateReceipesList(), filterName, inputValue);
    removeActualHtmlList();
    displayFiltersList(filterName);  
}

function getInputValue(inputElt) {
    return inputElt.value;
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
            let ingredientName = ingredient.ingredient;
            ingredientName = ingredientName.toLowerCase();
            console.log(ingredientName);
            if(ingredientName.includes(inputValue)) {
                console.log(ingredientName.includes(inputValue));
                if (!filterIngredientsList.includes(ingredientName)) {
                    filterIngredientsList.push(ingredientName);                
                }
                newReceipesList.push(receipe);
            }
        }
    }
    generateAppliancesListFromReceipesList(newReceipesList);
    generateUtensilsListFromReceipesList(newReceipesList);
}

function compareApplianceInputToFiltersList(receipesList, inputValue) {
    filterAppliancesList = [];
    for (let receipe of receipesList) {
        let applianceName = receipe.appliance.toLowerCase();
            if(applianceName.includes(inputValue)) {
                if (!filterAppliancesList.includes(applianceName)) {
                    filterAppliancesList.push(applianceName);                
                }
                newReceipesList.push(receipe);
            }
        }
    generateIngredientsListFromReceipesList(newReceipesList);
    generateUtensilsListFromReceipesList(newReceipesList);
}

function compareUtensilInputToFiltersList(receipesList, inputValue) {
    filterUtensilsList = [];
    for (let receipe of receipesList) {
        for (let utensil of receipe.ustensils) {
            let utensilName = utensil.toLowerCase();
            if(utensilName.includes(inputValue)) {
                if (!filterUtensilsList.includes(utensilName)) {
                    filterUtensilsList.push(utensilName);                
                }
                newReceipesList.push(receipe);
            }
        }
    }
    generateIngredientsListFromReceipesList(newReceipesList);
    generateAppliancesListFromReceipesList(newReceipesList);
}

function removeActualHtmlList() {
    let uls = document.querySelectorAll("ul.filter__items-list");
    console.log(uls);
    for (let ul of uls) {
        ul.innerHTML = "";
        console.log(ul);
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

userInputValue();



