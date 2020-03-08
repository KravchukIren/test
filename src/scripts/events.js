// es5
function validateFiled(val) {
  const name = "Anna";
  if (val == name) {
    console.log("Valid");
  } else {
    console.log("not Valid");
  }
}

function buttonClick() {
  console.log("heeeeey");
}

function showTodaysDate() {
  alert(Date());
}

function overDiv() {
  alert("Stay here!");
}

function outDiv() {
  alert("no, don't leave me!");
}

function onPageLoaded() {
  console.log("Page is loaded");
}

window.validateFiled = validateFiled;
window.buttonClick = buttonClick;
window.showTodaysDate = showTodaysDate;
window.overDiv = overDiv;
window.outDiv = outDiv;
window.onPageLoaded = onPageLoaded;
