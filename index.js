function addGroup() {
    console.log("hi");
}

$('.group').resizable({
    handles: 'e, w'
}).removeClass( "ui-resizable" ).draggable({containment: "window", handle: $('.groupHeader')});

