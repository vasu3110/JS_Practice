#Projects related to DOM

##Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-cerbpops?file=index.html)


## Project 1
```Javascript
console.log("Vasu");
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    else if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    else if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    else{
      body.style.backgroundColor=e.target.id;
    }
  })
}); 
```

## Project2
```Javascript
const form=document.querySelector('form');
//this use case will give you empty
//const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');
  const verdict=document.querySelector('#bmi-result');

  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    results.innerHTML=`<span>${bmi}</span>`;
    if(bmi<18.6){
      verdict.innerHTML=`You are Under Weight`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
      verdict.innerHTML=`Your Bmi is in normal range`;
    }
    else{
      verdict.innerHTML=`You are Overweight`;
    }
  }
});
```

## Project-3
```Javascript Code
const clock=document.getElementById('clock');

setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000);
```
## Project-4
```JavaScript
let randomNumber=(Math.round(Math.random()*100+1));
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');

const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess<1){
    alert('Please enter a larger number greater than or equal to 1');
  }
  else if(guess>100){
    alert('Please enter a smaller number less than or equal to 100');
  }
  else{
    prevGuess.push(guess);
    if(numGuess>10){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    } 
  }
}
function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right`)
  }
  else if(guess<randomNumber){
    displayMessage(`Number is too Low !!`);
  }
  else{
    displayMessage(`Number is too high !!`);
  }
}
function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML+=`${guess}   `;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`;
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot=innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  })
}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

```

## Project-5
```Javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});

```

## Project-6
```Javascript
//Generate a random color
//Generate random hex values
const randomColor = function () {
  console.log('Function called');
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
console.log(randomColor());

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```