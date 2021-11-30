// FUNCTIONS
function searchByTag(itemClicked) {
    let itemName = itemClicked.innerText;
    //Récupérer la valeur de l'élément clické
    //display receipes which correspond
    // -> update search status
    // -> update newreceipesList
    //Update filters list
    //Display a tag equal to the item clicked

}

// EVENTS

//On click on a item from a list
function userClickOnItem() {
    let elts = document.querySelectorAll("p.filter__item-name");
    for (let elt of elts) {
        elt.addEventListener("click", function(e) {
            searchByTag(elt);
        });
    }
}






//On click on the close cross of the tag
// -> Define which element it is
//display receipes which correspond
// -> update search status
// Si il reste des tags "receipes found"
// Si il n'y en a plus
// Si il y a une recherche principal
// -> update newreceipesList
//Update filters list
//Remove the tag

