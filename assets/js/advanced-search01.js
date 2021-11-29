let filterIngredientsList = [];
let filterAppliancesList = [];
let filterUtensilsList = [];

let filteredReceipes = [];


function filterReceipesFromTag() {
    // get input value

    // is there receipes already filtered ?
    // search status = "No search" -> compare input value to all receipes
    // search status = "x receipes found" -> compare input value to the list of already filtered receipes

    //get an updated filtered receipes list
    //display the receipes
    // Update the list of filters

    // search status = "No receipe found" -> Nothing to do / no filters displayed
    
}

// On click filters btn
function onClickFilterBtn() {
    let btnList = document.querySelectorAll("i.filter__icon");
    for (let element of btnList) {
        element.addEventListener("click", function(e) {
            displayFiltersList(e.target);
        });
    }
}

function displayFiltersList(element) {
    let filterName = element.dataset.filterName;
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

// Create Filter html list
function createFilterItemHtmlBlock(itemName, ul) {
    let item = document.createElement("p");
    item.innerHTML = itemName;
    let li = document.createElement("li");
    li.classList.add("filter__item");
    li.append(item);
    ul.append(li);
}

// Get 3 filters list from receipes
function generateFiltersListFromReceipesList(receipesList) {
    filterIngredientsList = [];
    filterAppliancesList = [];
    filterUtensilsList = [];
    for (let receipe of receipesList) {
        if (!filterAppliancesList.includes(receipe.appliance)) {
            filterAppliancesList.push(receipe.appliance);            
        }
        for (let utensil of receipe.ustensils) {
            if (!filterUtensilsList.includes(utensil)) {
                filterUtensilsList.push(utensil);
            }
        }
        for (let ingredient of receipe.ingredients) {
            if (!filterIngredientsList.includes(ingredient.ingredient)) {
                filterIngredientsList.push(ingredient.ingredient);                
            }
        } 
    }
}

// TO DO
/*function determinateReceipesList() {
    switch(searchStatus) {
        case "No search":
          unit = "g";
          break;
        case "cuillères à soupe":
          unit = " cuillères"
          break;
        default:
          unit;
      }
    //is there receipes already filtered Yes / No
    // YES : get the lists of filters from it
    //NO : get the lists of filters from all the receipes
    // List of "Ingrédients"
    // List of 'Appareils"
    // List of "Ustensiles"
 
}*/

generateFiltersListFromReceipesList(recipes);

onClickFilterBtn();