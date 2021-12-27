function displayTag(itemName, filterName) {
    createAndAppendTagHtmlBlock(itemName, filterName);
}

function createAndAppendTagHtmlBlock(itemName, filterName) {
    let ul = document.querySelector("ul.items-selected__list");
    let p = document.createElement("p");
    p.classList.add("item-selected__name");
    p.innerHTML = itemName;
    let i = document.createElement("i");
    i.classList.add("item-selected__icon", "far", "fa-times-circle");
    let li = document.createElement("li");
    li.classList.add("item-selected");
    switch (filterName) {
        case "ingredients" :
            li.classList.add("item-selected--filter1"); 
            break;
        case "appliance" :
            li.classList.add("item-selected--filter2"); 
            break;
        case "ustensils" :
            li.classList.add("item-selected--filter3"); 
            break;
    }
    li.append(p);
    li.append(i);
    ul.append(li);
    userClicksOnCross(i, li);
}