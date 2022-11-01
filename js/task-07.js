const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

//console.log(input.value);
input.addEventListener("input", () => {
  // text.toggleAttribute("font-size");
  text.setAttribute("style", "font-size:" + input.value + "px");
  // text.style.fontSize = parseInt(input.value);

  // console.log(text);
});
