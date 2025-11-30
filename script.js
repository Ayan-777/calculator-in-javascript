const input = document.querySelector(".display");

function ClickButton(data) {
  const value = data.innerText;

  // If "=" is pressed, evaluate
  if (value === "=") {
    try {
      input.value = eval(input.value);
    } catch {
      input.value = "Error";
    }
    return;
  }



  // Otherwise, add the clicked value to the display
  input.value += value;
}

function reset(){
    input.value = "";
}

