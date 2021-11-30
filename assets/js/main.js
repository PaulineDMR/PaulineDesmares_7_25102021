let searchStatus = "No search"; //"No search", "No receipe found or "Receipes found"

let filterIngredientsList = [];
let filterAppliancesList = [];
let filterUtensilsList = [];

let filteredReceipesId = [];
let newReceipesList = []; // mise à jour quand user tag input

// Déterminate wich receipes list to use
function determinateReceipesList() {
    switch(searchStatus) {
        case "No search":
        case "No receipe found":
        default:
            return recipes;
        case "Receipes found":
            newReceipesList = [];
            for (let id of filteredReceipesId) {
                for (let receipe of recipes) {
                    if (id === receipe.id) {
                        newReceipesList.push[receipe];
                    }
                }
            }
            return newReceipesList;
    }
}

