// On click filters btn
function onClickFilterBtn() {
    let btnList = document.querySelectorAll("i.filter__icon");
    for (let elt of btnList) {
        elt.addEventListener("click", function(e) {
            let filter = e.target.dataset.filterName;
            displayFiltersList(filter);
        });
    }
}

onClickFilterBtn();

// Event : User enter a value

function userInputValue() {
    let inputsElt = document.querySelectorAll("input.filter__input");
    for (let elt of inputsElt) {
        elt.addEventListener("keydown", function(e) {
            updateFiltersList(elt, e.key);
        });
    }
}

userInputValue();

//On click on a item from a list
function userClickOnItem() {
    let elts = document.querySelectorAll("p.filter__item-name");
    for (let elt of elts) {
        elt.addEventListener("click", function() {
            console.log("click");
            let filterName = getFilterName(elt);
            console.log(elt);
            console.log(filterName);
            console.log(searchStatus);
            let receipesList = [];
            console.log(receipesList);
            receipesList = determinateReceipesList();
            console.log(receipesList);
            searchByTag(elt, filterName, receipesList);
        });
    }
}

userClickOnItem();