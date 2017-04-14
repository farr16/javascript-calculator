var display;

window.onload = function() {
  display = document.getElementById('display');
  display.value = '0';
};

function press(val) {
  if(val == 'C') {
    display.value = '0';
  }
  else {
    display.value += val;
  }
}