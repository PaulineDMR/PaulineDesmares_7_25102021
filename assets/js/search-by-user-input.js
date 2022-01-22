function searchByUserInput(inputValue) {
    console.log(inputValue);
    console.log(recipes.length);
    filteredReceipesId = [];
    for (let receipe of recipes) {
        let string = stringCreate(receipe);
        if (string.toLowerCase().includes(inputValue.toLowerCase())) {
            filteredReceipesId.push(receipe.id);
        }  
    }
    if (filteredReceipesId.length > 0) {
        mainSearchStatus = "Receipes found";
        generateNewReceipesList();
        removeThumb();
        displayReceipes(newReceipesList);
    } else if (filteredReceipesId.length === 0) {
        mainSearchStatus = "No receipe found";
        removeThumb();
    }
    displayMessageOrNot();
    console.log(filteredReceipesId.length);
}


function stringCreate(receipe) {
    let string = "";
    let concat = string.concat(receipe.name, receipe.description);
    for (let ingredient of receipe.ingredients) {
        concat += ingredient.ingredient;
    }
    return concat
}

function displayMessageOrNot() {
    let messageContainer = document.querySelector("section.message-container");
    if (mainSearchStatus === "No receipe found") {
        messageContainer.style.display = "block";
    } else {
        messageContainer.style.display = "none";
    }
}