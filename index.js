const screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let screenValue = "";
for(item of buttons){
  item.addEventListener('click',(e) => {
    button__text = e.target.innerText;
    if(button__text === 'C') screenValue = "";
    else if(button__text === 'x'){
      screenValue += '*';
    }
    else if(button__text === '='){
      screenValue = eval(screenValue);
    }
    else{
      screenValue += button__text;
    }
    if(screenValue == undefined){
      screen.value = "Please enter Valid Inputs";
      screenValue = "";
    }
    else screen.value = screenValue;
  })
}

  document.addEventListener('keydown', (e) => {
    var name = e.key;    


    if((name >= 0 && name <= 9) || name == '*' || name == '/' || name == '+' || name == '-'){
      screenValue += name;
    }
    else if(name == '=' || name == 'Enter'){
      screenValue = eval(screenValue);
    }
    else if( name == 'Delete' || name == "Backspace") screenValue = "";
    else if(name == '(' || name == ')') screenValue += name;

    if(screenValue == undefined){
      screen.value = "Please enter Valid Inputs";
      screenValue = "";
    }
    else screen.value = screenValue;
  }, false);