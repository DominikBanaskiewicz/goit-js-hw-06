function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const div = document.getElementById("controls");
console.log(div.childNodes[1]);
const input = div.childNodes[1];
input.addEventListener("blur", () => {
  input.value;
  //  console.log(number);
});

const crtBtn = document.querySelector("button[data-create]");
const desBtn = document.querySelector("button[data-destroy]");
let width = 30;
let height = 30;
crtBtn.onclick = () => {
  // console.log(input.value);
  for (let i = 0; i < input.value; i += 1) {
    let newElem = document.createElement("div");

    newElem.setAttribute(
      "style",
      "height:" +
        height +
        "px" +
        "; width:" +
        width +
        "px " +
        " ;background-color: " +
        getRandomHexColor()
    );
    boxes.append(newElem);
    width = width + 10;
    height = height + 10;
  }
  console.log(boxes.childNodes);
};
const boxes = document.getElementById("boxes");

desBtn.onclick = () => {
  console.log(boxes.children);
  boxes.children.map(boxes.removeChild(boxes.lastElementChild));
};
