function searchByUserInput(inputValue) {
    let recipesList = determinateReceipesList();
    newReceipesList = [];
    newReceipesList = filtreRecipeWithUserInput(recipesList, inputValue);
    if (newReceipesList.length > 0) {
        mainSearchStatus = "Receipes found";
        removeThumb();
        displayReceipes(newReceipesList);
        generateAllFiltersList(newReceipesList);
        appendNewFiltersLists();
    } else if (filteredReceipesId.length === 0) {
        mainSearchStatus = "No receipe found";
        alert("Pas de recette avec vos critères de recherche");
    }
    console.log(newReceipesList.length);
}


function filtreRecipeWithUserInput(recipesList, userInput) {
    return recipesList.filter(function (recipe) {
        if (recipe.name.toLowerCase().includes(userInput.toLowerCase())) {
            return true;
        } else if (recipe.description.toLowerCase().includes(userInput.toLowerCase())) {
             return true;
        } else {
            for (let ingredient of recipe.ingredients) {
                if (ingredient.ingredient.toLowerCase().includes(userInput.toLowerCase())) {
                    return true;
                }
            }
        }
    });
  }