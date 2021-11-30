// On click filters btn
function onClickFilterBtn() {
    let btnList = document.querySelectorAll("i.filter__icon");
    for (let elt of btnList) {
        elt.addEventListener("click", function(e) {
            let filter = e.target.dataset.filterName;
            displayFiltersList(filter);
            
    userClickOnItem();
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