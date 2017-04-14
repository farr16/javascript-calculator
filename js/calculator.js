var display;
var val;

window.onload = function() {
  display = document.getElementById('display');
  val = '';
  display.value = val;
};

var operators = ["+", "-", "*", "/"];

function press(key) {
  // Handle clear button being pressed
  if(key === 'C') {
    val = '';
  }
  // Handle operator buttons being pressed
  // TODO: Add special exceptions for minus sign turning numbers negative
  //       and for operators replacing other operators
  else if (operators.indexOf(key) > -1) {
    console.log('Operator key pressed!');
    val += key;
  }
  // Handle numbers being pressed
  else {
    val += key;
  }
  
  display.value = val;
}
