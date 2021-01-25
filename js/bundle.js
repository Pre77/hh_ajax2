// Nikolay Zlotnikov 2021


function allowDrop(ev) {
    ev.preventDefault();
}

// Сохраним главные узлы DOM
const blockAsCellSave = document.getElementById("saveCell");
const blockAsPosSave = document.getElementById("savePos");

const box = blockAsPosSave.getBoundingClientRect();
// В нашем случае можно ID перетаскиваемого объекта сохранить
const blockToDrag = document.getElementById("dragBlock");

function drag(ev) {
    // запишем данные
    // смещения нужны для правильной позиции при конечном позиционировании
    ev.dataTransfer.setData("offsetX", ev.offsetX);
    ev.dataTransfer.setData("offsetY", ev.offsetY);
    // Если несколько элементов которые можно перетащить, нужно сохранить ID элемента
    //ev.dataTransfer.setData("IDNode", ev.target.id);
}
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function dropPos(ev) {
    console.log(ev);
    ev.preventDefault();
    // Извлекаем сохраненные данные, в нашем случае ID пропускаем
    //let data = ev.dataTransfer.getData("IDNode");
    // offsets нужны для правильного позиционирования блока, при отпускании курсора,
    // так как нам нужно высчитать позицию левого верхнего угла, относительно курсора
    let offsetX = ev.dataTransfer.getData("offsetX");
    let offsetY = ev.dataTransfer.getData("offsetY");
    // Если было бы несколько узлов для перетаскивания, копировали по ID записанному в данные
    //let element = document.getElementById(data).cloneNode(true);
    // В нашем случае копируем сохраный узел
    let element = blockToDrag.cloneNode(true);
    element.id = "";
    element.className = "cellPos dragProto";
    element.setAttribute(
        "style", `top: ${ev.y - box.y - offsetY}px; left: ${ev.x - box.x - offsetX}px; background: ${randomColor()}`);
    // Устраняем артефакт с копированием после перетаскивания
    element.setAttribute("ondragstart", null);
    element.setAttribute("draggable", false)
    blockAsPosSave.appendChild(element);
}
function dropCell(ev) {
    ev.preventDefault();
    // Извлекаем сохраненные данные, в нашем случае ID пропускаем
    //let data = ev.dataTransfer.getData("IDNode");
    // Если было бы несколько узлов для перетаскивания, копировали по ID записанному в данные
    //let element = document.getElementById(data).cloneNode(true);
    // В нашем случае копируем сохраный узел
    let element = blockToDrag.cloneNode(true);
    element.id = "";
    element.setAttribute("style", `background: ${randomColor()}`);
    element.className = "cell dragProto";
    // Устраняем артефакт с копированием после перетаскивания
    element.setAttribute("ondragstart", null);
    element.setAttribute("draggable", false)
    blockAsCellSave.appendChild(element);
}
