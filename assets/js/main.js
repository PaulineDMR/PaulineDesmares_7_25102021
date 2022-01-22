//change when a search is launched
let searchStatus = "No search"; //"No search", "No receipe found or "Receipes found"
let mainSearchStatus = "No search"; //"No search", "No receipe found or "Receipes found"
let tagSearchStatus = "No search"; //"No search", "No receipe found or "Receipes found"*/


let filterIngredientsList = [];
let filterAppliancesList = [];
let filterUtensilsList = [];

let filteredReceipesId = []; // filtered from main search
let filteredReceipesIdFromTag = []; // updated with serachByTag function
let newReceipesList = [];// a supprimer après modification


// Déterminate wich receipes list to use for search
function determinateReceipesList() {
    if (isThereASearch(mainSearchStatus) || isThereASearch(tagSearchStatus)) {
        return newReceipesList;
    } else if (!isThereASearch(mainSearchStatus) && !isThereASearch(tagSearchStatus)) {
        return recipes;
    }  
}

function isThereASearch(searchStatus) {
    switch(searchStatus) {
        case "No search":
        case "No receipe found":
        default:
            return false;
        case "Receipes found":
            return true;
    }
}
