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