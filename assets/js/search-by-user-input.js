function searchByUserInput(inputValue) {
    console.log(inputValue);
    filteredReceipesId = [];
    for (let receipe of recipes) {
        if (receipe.name.toLowerCase().includes(inputValue.toLowerCase())) {
            filteredReceipesId.push(receipe.id);
        } else {
            if (receipe.description.toLowerCase().includes(inputValue.toLowerCase())) {
                filteredReceipesId.push(receipe.id);
            } else {
                for (let ingredient of receipe.ingredients) {
                    let string = ingredient.ingredient.toLowerCase();
                    if (string.includes(inputValue.toLowerCase())) {
                        filteredReceipesId.push(receipe.id);
                        break;
                    }
                }
            }
        }  
    }
    if (filteredReceipesId.length > 0) {
        searchStatus = "Receipes found";
        generateNewReceipesList();
        removeThumb();
        displayReceipes(newReceipesList);
    } else if (filteredReceipesId.length === 0) {
        alert("Pas de recette avec vos critères de recherche");
    }
    console.log(filteredReceipesId.length);
}