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
            let filterName = getFilterName(elt);
            let receipesList = [];
            receipesList = determinateReceipesList();
            searchByTag(elt, filterName, receipesList);
        });
    }
}

userClickOnItem();

// User clicks on the cross of the tag
function userClicksOnCross() {
    let elts = document.querySelectorAll("i.item-selected__icon");
    for (let elt of elts) {
        elt.addEventListener("click", function() {
            let tag = elt.closest("li.item-selected");
            let key = tag.firstElementChild.innerHTML;
            sessionStorage.removeItem(key);
            tag.remove();
            // get tags from session
            // and relaunch a search by tag for each tag
        });
    }
}

