//change when a search is launched
let searchStatus = "No search"; //"No search", "No receipe found or "Receipes found"

let filterIngredientsList = [];
let filterAppliancesList = [];
let filterUtensilsList = [];

let filteredReceipesId = []; // filtered from main search
filteredReceipesIdFromTag = []; // updated with serachByTag function
let newReceipesList = [];

// Déterminate wich receipes list to use for search by tag
function determinateReceipesList() {
    switch(searchStatus) {
        case "No search":
        case "No receipe found":
        default:
            return recipes;
        case "Receipes found":
            return newReceipesList;
    }
}
