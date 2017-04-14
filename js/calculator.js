var display;
var val;

window.onload = function() {
  display = document.getElementById('display');
  val = '';
  display.value = val;
};

var operators = ["+", "-", "*", "/"];

var noDecimalInCurrNumber = true;

function press(key) {
  var lastChar = val.slice(-1);
  
  // Handle clear button being pressed
  if(key === 'C') {
    noDecimalInCurrNumber = true;
    val = '';
  }
  // Handle operator buttons being pressed
  // TODO: Add special exceptions for minus sign turning numbers negative
  //       and for operators replacing other operators
  else if (operators.indexOf(key) > -1) {
    noDecimalInCurrNumber = true;
    val += key;
  }
  // Handle decimal button being pressed
  else if (key === '.') {
	if (noDecimalInCurrNumber) {
      if (operators.indexOf(lastChar) < 0) {
        noDecimalInCurrNumber = false;
        val += key;
	  }
	}
  }
  // Handle equals button being pressed
  else if (key === '=') {
    val = '' + eval(val);
	noDecimalInCurrNumber = (val.indexOf('.') < 0);
  }
  // Handle numbers being pressed
  else {
    val += key;
  }
  
  // TODO: Replace '/' '-' and '*' characters with division sign, minus sign
  //       and multiplication sign respectively for the screen display
  display.value = val;
}
