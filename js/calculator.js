var display;
var val;

window.onload = function() {
  display = document.getElementById('display');
  val = '';
  display.value = val;
};

var operators = ["×", "÷", "+", "−"];

function press(key) {
  // Handle clear button being pressed
  if(key == 'C') {
    val = '';
  }
  // Handle numbers being pressed
  else {
    val += key;
  }
  
  display.value = val;
}
