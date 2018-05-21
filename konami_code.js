const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
let i = 0;

document.body.addEventListner('keydown', function(event){
  const key = parseInt(event.detail || event.which);

  if (key == code[i]) {
    i++;

    if(i === code.length) {
      alert("Congratulations, nerd!");
    }
  } else {
    i = 0;
    
  }
}
};