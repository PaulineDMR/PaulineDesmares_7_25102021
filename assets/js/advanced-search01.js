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
    let btnList = document.querySelectorAll("div.filter");
    console.log(btnList);
    for (let element of btnList) {
        element.addEventListener("click", function(e) {
            console.log(e.target);
        });
    };
}

function displayFiltersList(element) {
    for (let name of element.classList) {
        switch (name) {
            case "filter-ingredient" :
                for (let item of filterIngredientsList) {    
                    createFilterItemHtmlBlock(name);
                }
                break;
            case "filter-appareils" :
                for (let item of filterAppliancesList) {    
                    createFilterItemHtmlBlock(name);
                }
                break;
            case "filter-ustensiles" :
                for (let item of filterUtensilsList) {    
                    createFilterItemHtmlBlock(name, item);
                }
                break;
        } 
    }
    
    //afficher la liste des filtres possibles
    // List of "Ingrédients"
    // List of 'Appareils"
    // List of "Ustensiles"
}

// Create Filter html block
function createFilterItemHtmlBlock(className, itemName) {
    let item = document.createElement("p");
    item.innerHTML = itemName;
    let li = document.createElement("li").classList.add("filter-items-list");
    li.append(item);
    document.querySelector("div." + className).childNodes[1].append(li);
}

// Get 3 filters list from receipes
function generateFiltersListFromReceipesList(receipesList) {
    filterIngredientsList = [];
    filterApplianceList = [];
    filterUtensilsList = [];
    for (let receipe of receipesList) {
        filterApplianceList.push(receipe.appliance);
        for (let utensil of receipe.ustensils) {
            filterUtensilsList.push(utensil);
        }
        for (let ingredient of receipe.ingredients) {
            filterIngredientsList.push(ingredient.ingredient);
        } 
    }
}

// Get Appliance filters list or Utensils filters list
function getFiltersListFromReceipesList(receipesList, filterName, filterNameList) {
    filterNameList = [];
    for(let receipe of receipesList) {
        filterName = receipe.filterName
        filterNameList.push(receipe.filterName);
    }
}

// Get Ingredients filters list or Utensils filters list
function getIngredientsListFromReceipesList(receipesList) {
    filterIngredientsList = [];
    for(let receipe of receipesList) {
        for(let ingredient of receipesList.ingredients) {
            filterIngredientsList.push(ingredient);
        }
    }
}

function determinateReceipesList() {
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
 
}

onClickFilterBtn();