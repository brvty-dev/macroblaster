// Functions to change the gender button backgrounds when clicked

let gender;

let male = document.getElementById("male");
male.addEventListener("click", changeMaleBg);

let female = document.getElementById("female");
female.addEventListener("click", changeFemaleBg);

function changeMaleBg(event) {
  male.style.backgroundColor = "#008000";
  male.dataset.selected = "true";
  female.style.backgroundColor = "#7b0077";
  female.dataset.selected = "false";
}

function changeFemaleBg(event) {
  female.style.backgroundColor = "#008000";
  female.dataset.selected = "true";
  male.style.backgroundColor = "#000067";
  male.dataset.selected = "false";
}

// Functions to change the goal button backgrounds when clicked

let goal;

let bulk = document.getElementById("bulk");
bulk.addEventListener("click", changeBulkBg);

let cut = document.getElementById("cut");
cut.addEventListener("click", changeCutBg);

let maintain = document.getElementById("maintain");
maintain.addEventListener("click", changeMaintainBg);

function changeBulkBg(event) {
  window.alert("A resistance training routine is recommended when choosing this option.");
  bulk.style.backgroundColor = "#008000";
  bulk.dataset.selected = "true";
  cut.style.backgroundColor = "#005352";
  cut.dataset.selected = "false";
  maintain.style.backgroundColor = "#004544";
  maintain.dataset.selected = "false";
}

function changeCutBg(event) {
  cut.style.backgroundColor = "#008000";
  cut.dataset.selected = "true";
  bulk.style.backgroundColor = "#003938";
  bulk.dataset.selected = "false";
  maintain.style.backgroundColor = "#004544";
  maintain.dataset.selected = "false";
}

function changeMaintainBg(event) {
  maintain.style.backgroundColor = "#008000";
  maintain.dataset.selected = "true";
  bulk.style.backgroundColor = "#003938";
  bulk.dataset.selected = "false";
  cut.style.backgroundColor = "#005352";
  cut.dataset.selected = "false";
}

// Functions to change the activity level button backgrounds when clicked

let activityFactor;

let none = document.getElementById("none");
none.addEventListener("click", changeNoneBg);

let light = document.getElementById("light");
light.addEventListener("click", changeLightBg);

let medium = document.getElementById("medium");
medium.addEventListener("click", changeMediumBg);

let high = document.getElementById("high");
high.addEventListener("click", changeHighBg);

let extreme = document.getElementById("extreme");
extreme.addEventListener("click", changeExtremeBg);

function changeNoneBg(event) {
  none.style.backgroundColor = "#008000";
  none.dataset.selected = "true";
  light.style.backgroundColor = "#7b0000";
  light.dataset.selected = "false";
  medium.style.backgroundColor = "#790001";
  medium.dataset.selected = "false";
  high.style.backgroundColor = "#6a0001";
  high.dataset.selected = "false";
  extreme.style.backgroundColor = "#580001";
  extreme.dataset.selected = "false";
}

function changeLightBg(event) {
  light.style.backgroundColor = "#008000";
  light.dataset.selected = "true";
  none.style.backgroundColor = "#8b0001";
  none.dataset.selected = "false";
  medium.style.backgroundColor = "#790001";
  medium.dataset.selected = "false";
  high.style.backgroundColor = "#6a0001";
  high.dataset.selected = "false";
  extreme.style.backgroundColor = "#580001";
  extreme.dataset.selected = "false";
}

function changeMediumBg(event) {
  medium.style.backgroundColor = "#008000";
  medium.dataset.selected = "true";
  none.style.backgroundColor = "#8b0001";
  none.dataset.selected = "false";
  light.style.backgroundColor = "#7b0000";
  light.dataset.selected = "false";
  high.style.backgroundColor = "#6a0001";
  high.dataset.selected = "false";
  extreme.style.backgroundColor = "#580001";
  extreme.dataset.selected = "false";
}

function changeHighBg(event) {
  high.style.backgroundColor = "#008000";
  high.dataset.selected = "true";
  none.style.backgroundColor = "#8b0001";
  none.dataset.selected = "false";
  light.style.backgroundColor = "#7b0000";
  light.dataset.selected = "false";
  medium.style.backgroundColor = "#790001";
  medium.dataset.selected = "false";
  extreme.style.backgroundColor = "#580001";
  extreme.dataset.selected = "false";
}

function changeExtremeBg(event) {
  extreme.style.backgroundColor = "#008000";
  extreme.dataset.selected = "true";
  none.style.backgroundColor = "#8b0001";
  none.dataset.selected = "false";
  light.style.backgroundColor = "#7b0000";
  light.dataset.selected = "false";
  medium.style.backgroundColor = "#790001";
  medium.dataset.selected = "false";
  high.style.backgroundColor = "#6a0001";
  high.dataset.selected = "false";
}

// Functions to handle the datalist inputs

function convertToNumber(value) {
  return +value;
}

let weightsInput = document.getElementById("weight");
weightsInput.addEventListener("input", handleWeightSelection);

let weightSelection;
let numericWeight;

function handleWeightSelection () {
  let selectedWeight = weightsInput.value;
  let weightSelection = selectedWeight;
  numericWeight = convertToNumber(selectedWeight);
}

let heightsInput = document.getElementById("height");
heightsInput.addEventListener("input", handleHeightSelection);

let heightSelection;
let numericHeight;

function handleHeightSelection () {
  let selectedHeight = heightsInput.value;
  let heightSelection = selectedHeight;
  numericHeight = convertToNumber(selectedHeight);
}

let agesInput = document.getElementById("age");
agesInput.addEventListener("input", handleAgeSelection);

let ageSelection;
let numericAge;

function handleAgeSelection () {
  let selectedAge = agesInput.value;
  let ageSelection = selectedAge;
  numericAge = convertToNumber(selectedAge);
}

let exercise;
let exerciseSummary;
let extraWater;
let weightClass;
let encourage;
let yourGoal;
let goalCals;

let submit = document.getElementById("submit");
let results = document.getElementById("results");
submit.addEventListener("click", showResults);

function showResults (event) {

let bmr;
let bmrMale = 88.362 + (13.397 * numericWeight) + (4.799 * numericHeight) - (5.677 * numericAge);
let bmrFemale = 447.593 + (9.247 * numericWeight) + (3.098 * numericHeight) - (4.330 * numericAge);

if (male.dataset.selected === "true") {
  bmr = bmrMale;
  gender = "Male";
  } else if (female.dataset.selected === "true") {
  bmr = bmrFemale;
  gender = "Female";
  } else {
  window.alert("PLEASE SELECT YOUR GENDER");
  event.preventDefault();
  return;
}

if (bulk.dataset.selected === "true") {
  goal = +500;
  yourGoal = "Bulk";
  goalCals = "plus 500 kcals/day";
  } else if (cut.dataset.selected === "true") {
  goal = -500;
  yourGoal = "Cut";
  goalCals = "less 500 kcals/day";
  } else if (maintain.dataset.selected === "true") {
  goal = 0;
  yourGoal = "Maintain";
  goalCals = "0 extra kcals/day";
  } else {
  window.alert("PLEASE SELECT YOUR EXERCISE GOAL");
  event.preventDefault();
  return;
}

if (!numericAge || numericAge < 18 || numericAge > 99) {
  window.alert("PLEASE ENTER AN AGE");
  event.preventDefault();
  return;
}

if (!numericHeight || numericHeight < 60 || numericHeight > 252) {
  window.alert("PLEASE ENTER A HEIGHT");
  event.preventDefault();
  return;
}

if (!numericWeight || numericWeight < 38 || numericWeight > 190) {
  window.alert("PLEASE ENTER A WEIGHT");
  event.preventDefault();
  return;
}

if (none.dataset.selected === "true") {
  activityFactor = 1.2;
  exercise = "None";
  exerciseSummary = "Little or no exercise";
  extraWater = 0;
  } else if (light.dataset.selected === "true") {
  activityFactor = 1.375;
  exercise = "Light";
  exerciseSummary = "1-3 days/week";
  extraWater = 4;
  } else if (medium.dataset.selected === "true") {
  activityFactor = 1.55;
  exercise = "Medium";
  exerciseSummary = "3-5 days/week";
  extraWater = 8;
  } else if (high.dataset.selected === "true") {
  activityFactor = 1.725;
  exercise = "High";
  exerciseSummary = "6-7 days/week";
  extraWater = 12;
  } else if (extreme.dataset.selected === "true") {
  activityFactor = 1.9;
  exercise = "Extreme";
  exerciseSummary = "Exercise & physical job";
  extraWater = 16;
  } else {
  window.alert("PLEASE SELECT YOUR EXERCISE LEVEL");
  event.preventDefault();
  return;
}

let calories = Math.round(bmr * activityFactor);

let bmi = numericWeight / ((numericHeight/100)**2);

if (bmi < 18) {
  weightClass = "underweight.<br><br>Select 'Build muscle' and aim for a BMI score of 18.5";
  encourage = "Oh dear!";
  } else if (bmi < 18.5) {
  weightClass = "slightly underweight.<br><br>Select 'Build muscle' and aim for a BMI score of 18.5";
  encourage = "So close!";
  } else if (bmi < 24.9) {
  weightClass = "healthy weight.<br><br>Select 'Stay the same' to keep you BMI score between 18.5 and 24.9";
  encourage = "Get in!";
  } else if (bmi < 25.5) {
  weightClass = "slightly overweight.<br><br>Select 'Lose weight' and aim for a BMI score of 24.9";
  encourage = "So close!";
  } else if (bmi < 29.9) {
  weightClass = "overweight.<br><br>Select 'Lose weight' and aim for a BMI score of 24.9";
  encourage = "Oh dear!";
  } else {
  weightClass = "obese.<br><br>Select 'Lose weight' and aim for a BMI score of 24.9";
  encourage = "Oh dear!";
}

let caloriesOut = calories + goal;
let bmiOut = bmi.toFixed(1);
let protein = Math.round(1.9 * numericWeight);
let fats = Math.round((0.2 * caloriesOut)/9);
let carbs = Math.round(caloriesOut - (protein * 4) - (fats * 9))/4;
let water = (0.0295735 * numericWeight) + (extraWater * 0.0295735);
let waterOut = water.toFixed(2);

const totalInches = numericHeight / 2.54;
let feet = Math.floor(totalInches / 12);
let inches = Math.round(totalInches % 12);

if (inches === 12) {
  feet += 1;
  inches = 0;
}

const totalPounds = numericWeight * 2.20462;
let pounds = Math.round(totalPounds);

  results.innerHTML = `
  <br>
    <table>
      <tr>
        <th colspan="2" style="text-align:center";>YOU SELECTED</th>
      </tr>
      <tr>
        <th>Gender:</th><td>${gender}</td>
      </tr>
      <tr>
        <th>Goal:</th><td>${yourGoal} (${goalCals})</td>
      </tr>
      <tr>
        <th>Age:</th><td>${numericAge} yrs</td>
      </tr>
      <tr>
        <th>Height:</th><td>${numericHeight} cm (${feet}'${inches}")</td>
      </tr>
      <tr>
        <th>Weight:</th><td>${numericWeight} kg (${pounds} lbs)</td>
      </tr>
      <tr>
        <th>Exercise:</th><td>${exercise} (${exerciseSummary})</td>
      </tr>
    </table>
      <h2>
        Your BMI score is: <span style="background-color:white;padding:1.25vw;text-decoration:underline;">${bmiOut}</span>
      </h2>
        <p class="italic">
          ${encourage} You are categorised as ${weightClass}.
        </p>
    <table>
      <tr>
        <th colspan="2" style="text-align:center";>RECOMMENDED MACROS</th>
      </tr>
      <tr>
        <th>Daily Calories:</th><td>${caloriesOut} kcal</td>
      </tr>
      <tr>
        <th>Daily Protein:</th><td>${protein} g</td>
      </tr>
      <tr>
        <th>Daily Carbs:</th><td>${carbs} g</td>
      </tr>
      <tr>
        <th>Daily Fats:</th><td>${fats} g</td>
      </tr>
      <tr>
        <th>Daily Water *:</th><td>${waterOut} litres</td>
      </tr>
    </table>
      <p class="italic">
        ** Recommended macros are based on your selections and calculated using the Harris-Benedict equation. 
        Factors such as muscle mass, body composition, and metabolism can affect your actual requirements. 
        If you have any underlying health conditions or fitness concerns, it's advisable to consult with a 
        healthcare professional or a registered dietitian for personalized guidance **
      </p>
      <p>
        * Sugar-free soft drinks as well as tea and coffee made with fat-free milk can all be included in your water intake.
      </p>
        <a href="/" class="reload" id="reload" aria-label="Return to macroBLASTER's home page">
          Reload
        </a>
`;
}