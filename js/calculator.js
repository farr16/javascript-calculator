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
    val += key;
  }
  // Handle decimal button being pressed
  // TODO: Add handling for making sure numbers only have one decimal point
  else if (key === '.') {
    val += key;
  }
  // Handle equals button being pressed
  else if (key === '=') {
    console.log('Equals button pressed!');
    val = '' + eval(val);
  }
  // Handle numbers being pressed
  else {
    val += key;
  }
  
  display.value = val;
}
