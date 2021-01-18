function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
}

function dropPos(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let element = document.getElementById(data).cloneNode(true);
    element.id = '';
    element.className = 'cellPos dragProto';
    element.setAttribute('style', `top: ${ev.pageY}px; left: ${ev.pageX}px;`);
    ev.target.appendChild(element);
}
function dropCell(ev) {
    ev.preventDefault();
    console.log(ev)
    var data = ev.dataTransfer.getData("text");
    let element = document.getElementById(data).cloneNode(true);
    element.id = '';
    element.className = 'cell dragProto';
    ev.target.appendChild(element);
}