
// On click filters btn
function onClickFilterBtn() {
    let btnList = document.querySelectorAll("i.filter__icon");
    for (let elt of btnList) {
        elt.addEventListener("click", function(e) {
            let filter = e.target.dataset.filterName;
            displayFiltersList(filter);
        });
    }
}

function displayFiltersList(filterName) {
    switch (filterName) {
        case "filter-ingredients" :
            for (let item of filterIngredientsList) {  
                createAndAppendHtmlBlock(filterName, item);
            }
            break;
        case "filter-appareils" :
            for (let item of filterAppliancesList) {    
                createAndAppendHtmlBlock(filterName, item);
            }
            break;
        case "filter-ustensiles" :
            for (let item of filterUtensilsList) {  
                createAndAppendHtmlBlock(filterName, item);
            }
            break;
    }
}

// Create and append html filters list

function createAndAppendHtmlBlock(className, itemName) {
    const ul = document.querySelector("ul." + className);
    createFilterItemHtmlBlock(itemName, ul);
    ul.style.display = "flex";
}

function createFilterItemHtmlBlock(itemName, ul) {
    let item = document.createElement("p");
    item.innerHTML = itemName;
    let li = document.createElement("li");
    li.classList.add("filter__item");
    li.append(item);
    ul.append(li);
}

// Get 3 filters list from receipes list
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