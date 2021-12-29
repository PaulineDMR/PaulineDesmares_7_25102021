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
    li.classList.add(filterName);
    li.append(p);
    li.append(i);
    ul.append(li);
    userClicksOnCross(i, li);
}