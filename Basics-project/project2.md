# Solution for BMI calcutor 
 ## project 2


 # Here i wrote a code for functionlity of BMI calcultor
   


   ```javascript
     const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  if (height === '' || height < 0 || isNaN(height)) {
    console.log(`please enter valid height ${height}`);
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    console.log(`please enter valid weight${weight}`);
  } else {
    const heightInMeters = height / 100; // convert height from centimeters to meters
    const bmi = (weight / (heightInMeters * heightInMeters) / 10000).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});





   ```










   # project no 3
   ## soloution code of `guess the number ` (javascript)





   ## here i wrote a code javascript code for guess a number with








   ```javascript

     let randomNumber = parseInt(Math.random() * 100 + 1);

const input = document.querySelector('.guessField');
const submit = document.querySelector('#subt');
const guessA = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let pervousvalue = [];
let numguess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    console.log(guess);
    vadilateGuess(guess);
  });
}
function vadilateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Enter a valid Number`);
  } else if (guess < 1) {
    alert('Enter a number larger than 1');
  } else if (guess > 100) {
    alert('Enter a number lesser than hundred');
  } else {
    pervousvalue.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displayMessage(`gameover.random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkSum(guess);
    }
  }
}
function checkSum(guess) {
  if (guess === randomNumber) {
    displayMessage(`you  had guess the correct number`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`you guessed a low number`);
  } else if (guess > randomNumber) {
    displayMessage(`you guessed a high number`);
  }
}
function displayGuess(guess) {
  input.value = '';

  guessA.innerHTML += `${guess} , `;
  numguess++;
  remaning.innerHTML = `${11 - numguess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2>"id=newGame">Start a new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessA.innerHTML = '';
    pervousvalue = [];
    numguess = 1;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    remaning.innerHTML = `${11 - numguess}`;
    playGame = true;
  });
}


   ```









   # Project 3 :

   ## Soloution code for changing backrgound colour by random color (by assing button funtionality in it)
 


   ```javascript
         
         // first we had to generate random color

const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalid;

// Here this code change background color
const startChangeingColor = function () {
  if (!intervalid) {
    intervalid = setInterval(changeBgColor, 1000);
    function changeBgColor() {
      document.body.style.backgroundColor = randomcolor();
    }
  }
};
//Here this code stop changing color
const stopChangeingColor = function () {
  clearInterval(intervalid);
  intervalid = null;
};

document.querySelector('#start').addEventListener('click', startChangeingColor);

document.querySelector('#stop').addEventListener('click', stopChangeingColor);







   ```


  