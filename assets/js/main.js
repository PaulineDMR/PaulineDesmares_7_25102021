//change when a search is launched
let searchStatus = "No search"; //"No search", "No receipe found or "Receipes found"

let filterIngredientsList = [];
let filterAppliancesList = [];
let filterUtensilsList = [];

let filteredReceipesId = []; // filtered from main search
let filteredReceipesIdFromTag = [];
let newReceipesList = []; // mise à jour quand user tag input

// Déterminate wich receipes list to use
function determinateReceipesList() {
    switch(searchStatus) {
        case "No search":
        case "No receipe found":
        default:
            return recipes;
        case "Receipes found":
            return generateNewReceipesList();
    }
}

function whichReceipesList() {
    let tagList = document.querySelectorAll("li.item-selected");
    if (tagList.length === 0) {
        return determinateReceipesList();
    } else {
        return generateNewReceipesListFromTagSearch();
    }
}
