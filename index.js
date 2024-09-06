function addGroup() {
    console.log("hi");
}

$('.group').resizable({
    handles: 'e, w'
}).removeClass( "ui-resizable" ).draggable({containment: "window", handle: $('.groupHeader')});

function controlPressHeader(event) {
    console.log("banana")
}

function controlPressItem(event) {
    const altText = event.target.getAttribute('alt');
    const parent = event.target.parentElement.parentElement;
    const itemText = parent.children[0]
    if (altText === "editButtonItem") {
        console.log('a');
    } else if (altText == "strikethroughButton") {
        if (itemText.style.textDecoration === "") {
            itemText.style.textDecoration = "line-through";
        } else {
            itemText.style.textDecoration = "";
        }
    } else if (altText == "removeItemButton") {
        console.log('c');
        parent.parentElement.removeChild(parent);
    }
}
