function generateNewReceipesList() {
    newReceipesList = [];
    for (let id of filteredReceipesId) {
        for (let receipe of recipes) {
            if (id === receipe.id) {
                newReceipesList.push(receipe);
            }
        }
    }
    return newReceipesList; 
}

function generateNewReceipesListFromTagSearch() {
    newReceipesList = [];
    for (let id of filteredReceipesIdFromTag) {
        for (let receipe of recipes) {
            if (id === receipe.id) {
                newReceipesList.push(receipe);
            }
        }
    }
    return newReceipesList; 
}