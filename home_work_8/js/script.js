const color = document.querySelector("#color");
const selectForm = document.querySelector("#forms");
const figure = document.querySelector("#figure");

const FORMS = ["square", "circle", "rectangle"];
let selectedColor = "black";

window.onload = render;

function render() {
  renderOptionsList(FORMS, selectForm);
  figure.style.backgroundColor = selectedColor;
}

selectForm.addEventListener("change", (e) => {
  let { value } = e.target;
  figure.className = value;
});

figure.addEventListener("mousedown",e => drugDropAny(e.target));

color.addEventListener("change", (e) => {
  let { value } = e.target;
  selectedColor = value;
  figure.style.backgroundColor = selectedColor;
});

function renderOptionsList(listOptionTextContent, node) {
  listOptionTextContent.map((item) => {
    let optionElem = document.createElement("option");
    optionElem.textContent = item;
    node.append(optionElem);
  });
}

function drugDropAny(node) {


  node.addEventListener('mousedown',
  (e) => {


    let shiftX = e.clientX - node.getBoundingClientRect().left;
    let shiftY = e.clientY - node.getBoundingClientRect().top;
    
    node.style.position = "absolute";
    node.style.zIndex = 1000;
    // document.body.append(node);
    moveAt(e.pageX, e.pageY);

    function moveAt(pageX, pageY) {
      node.style.left = pageX - shiftX + "px";
      node.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);

    node.addEventListener ('mouseup', () => {
      document.removeEventListener("mousemove", onMouseMove);
      node.onmouseup = null;
    });


    
  });
};

  

