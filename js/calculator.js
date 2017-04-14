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
  else if (operators.indexOf(key) > -1) {
    // If the end character is another operator or a decimal, replace it with
    // the current operator
    if (operators.indexOf(lastChar) > -1 || lastChar === '.') {
      if (val.length > 1 || key === '+' || key === '-') {
        noDecimalInCurrNumber = true;
        val = val.replace(/.$/, key);
      }
    }
    // Only place an operator at the start of the expression if it's a minus sign
    else {
      if (val.length !== 0 || key === '-') {
        noDecimalInCurrNumber = true;
        val += key;
      }
    }
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
