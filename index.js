var i = 1;
addGroup();

if (localStorage.getItem("bodyState") != null) {
    document.body.innerHTML = localStorage.getItem("bodyState");
}

function addGroup() {
    document.body.innerHTML +=
        `
        <div class="group">
    <div class="groupHeader">
        <div class="groupHeaderText">Today's Work</div>
        <div class="groupHeaderControls">
            <button class="headerControlButton" alt="addItemButton" onclick="controlPressHeader(event)">A</button>
            <button class="headerControlButton" alt="editButtonHeader" onclick="controlPressHeader(event)">E</button>
            <button class="headerControlButton" alt="strikethroughButtonHeader" onclick="controlPressHeader(event)">S</button>
            <button class="headerControlButton" alt="removeGroupButton" onclick="controlPressHeader(event)">R</button>
        </div>
    </div>
    <div class="groupItems">
        <div class="groupItem">
            <div class="itemText">Water plants</div>
            <div class="itemControls">
                <div class="itemControlButton" alt="editButtonItem" onclick="controlPressItem(event)">E</div>
                <div class="itemControlButton" alt="strikethroughButton" onclick="controlPressItem(event)">S</div>
                <div class="itemControlButton" alt="removeItemButton" onclick="controlPressItem(event)">R</div>
            </div>
        </div>
        <div class="groupItem">
            <div class="itemText">Finish math homework</div>
            <div class="itemControls">
                <div class="itemControlButton" alt="editButtonItem" onclick="controlPressItem(event)">E</div>
                <div class="itemControlButton" alt="strikethroughButton" onclick="controlPressItem(event)">S</div>
                <div class="itemControlButton" alt="removeItemButton" onclick="controlPressItem(event)">R</div>
            </div>
        </div>
        <div class="groupItem">
            <div class="itemText">Discord call for project</div>
            <div class="itemControls">
                <div class="itemControlButton" alt="editButtonItem" onclick="controlPressItem(event)">E</div>
                <div class="itemControlButton" alt="strikethroughButton" onclick="controlPressItem(event)">S</div>
                <div class="itemControlButton" alt="removeItemButton" onclick="controlPressItem(event)">R</div>
            </div>
        </div>
    </div>
        `

    $('.group').draggable({containment: "window", handle: $('.groupHeader')});
}



function controlPressHeader(event) {
    const altText = event.target.getAttribute('alt');
    if (altText === "removeGroupButton") {
        event.target.parentElement.parentElement.parentElement.remove();
    }

}

window.setInterval(saveState, 10000)

function saveState() {
    localStorage.setItem("bodyState", document.body.innerHTML);
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
