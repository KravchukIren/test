function applyCss() {
  const olsList = document.getElementsByTagName("ol");
  olsList.forEach(element => {
    element.style.color = "blue";
    element.style.backgroundColor = "violet";
  });

  const redTextElement = document.getElementsByClassName("red-text");
  redTextElement.forEach(element => {
    element.style.color = "red";
    element.style.fontSize = "30px";
  });

  const pWithId = document.getElementById("specialP");
  pWithId.style.fontFamily = "Times New Roman";
  pWithId.style.border = "2px dotted #000000";
}

function setHref() {
  const input = document.getElementsByName("hrefInputFiles")[0];
  const aTag = document.getElementById("linkToSomewhere");
  let value;
  if (input.value) {
    value = input.value;
  } else {
    value = "https://google.com/";
  }
  aTag.href = value;
  aTag.target = "_blanc";
  console.log(input.value);
}

function changeTextAndStyles() {
  const button = document.getElementById("newText");
  button.innerHTML = "I am changed";
  button.style.padding = "10px";
  button.style.border = "1px solid black";
  button.style.backgroundColor = "purple";
  button.addEventListener("click", () => {
    alert("owwww3");
  });
}

window.changeTextAndStyles = changeTextAndStyles;
window.setHref = setHref;
window.applyCss = applyCss;
