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
        displayMessageOrNot();
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

  function displayMessageOrNot() {
    let messageContainer = document.querySelector("section.message-container");
    if (mainSearchStatus === "No receipe found") {
        messageContainer.style.display = "block";
    } else {
        messageContainer.style.display = "none";
    }
}