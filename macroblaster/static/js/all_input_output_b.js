// Functions to change the gender button backgrounds when clicked

let genderB;

let goalB;

function selectButton(selected, group) {
  group.forEach(btn => {
    const isSelected = btn === selected;
    btn.style.backgroundColor = isSelected ? "#ffff00" : "#CBF83E";
    btn.dataset.selected = isSelected ? "true" : "false";
  });
}

// Gender buttons
const genderButtonsB = [maleB, femaleB];

// Goal buttons
const goalButtonsB = [bulkB, cutB, maintainB];

// Activity buttons
const activityButtonsB = [noneB, lightB, mediumB, highB, extremeB];

// Gender
maleB.addEventListener("click", () => selectButton(maleB, genderButtonsB));
femaleB.addEventListener("click", () => selectButton(femaleB, genderButtonsB));

// Goal
bulkB.addEventListener("click", () => {
  alert("A resistance training routine is recommended when choosing this option.");
  selectButton(bulkB, goalButtons);
});
cutB.addEventListener("click", () => selectButton(cutB, goalButtonsB));
maintainB.addEventListener("click", () => selectButton(maintainB, goalButtonsB));

// Activity
noneB.addEventListener("click", () => selectButton(noneB, activityButtonsB));
lightB.addEventListener("click", () => selectButton(lightB, activityButtonsB));
mediumB.addEventListener("click", () => selectButton(mediumB, activityButtonsB));
highB.addEventListener("click", () => selectButton(highB, activityButtonsB));
extremeB.addEventListener("click", () => selectButton(extremeB, activityButtonsB));

// Functions to handle the datalist inputs

function convertToNumberB(value) {
  return +value;
}

let weightsInputB = document.getElementById("weightB");
weightsInputB.addEventListener("input", handleWeightSelectionB);

let weightSelectionB;
let numericWeightB;

function handleWeightSelectionB () {
  weightSelectionB = weightsInputB.value;
  numericWeightB = convertToNumberB(weightSelectionB);
}

let heightsInputB = document.getElementById("heightB");
heightsInputB.addEventListener("input", handleHeightSelectionB);

let heightSelectionB;
let numericHeightB;

function handleHeightSelectionB () {
  heightSelectionB = heightsInputB.value;
  numericHeightB = convertToNumberB(heightSelectionB);
}

let agesInputB = document.getElementById("ageB");
agesInputB.addEventListener("input", handleAgeSelectionB);

let ageSelectionB;
let numericAgeB;

function handleAgeSelectionB () {
  ageSelectionB = agesInputB.value;
  numericAgeB = convertToNumberB(ageSelectionB);
}

let activityFactorB;
let exerciseB;
let exerciseBSummary;
let extraWaterB;
let weightClassB;
let encourageB;
let yourgoalB;
let goalBCals;

let submitB = document.getElementById("submitB");
let resultsB = document.getElementById("resultsB");
submitB.addEventListener("click", showresultsB);

function showresultsB (event) {

let bmrB;
let bmrmaleB = 88.362 + (13.397 * numericWeightB) + (4.799 * numericHeightB) - (5.677 * numericAgeB);
let bmrFemaleB = 447.593 + (9.247 * numericWeightB) + (3.098 * numericHeightB) - (4.330 * numericAgeB);

if (maleB.dataset.selected === "true") {
  bmrB = bmrmaleB;
  genderB = "Male";
} else if (femaleB.dataset.selected === "true") {
  bmrB = bmrFemaleB;
  genderB = "Female";
} else {
  window.alert("PLEASE SELECT YOUR GENDER");
  event.preventDefault();
  return;
}

if (bulkB.dataset.selected === "true") {
  goalB = +500;
  yourgoalB = "Bulk";
  goalBCals = "plus 500 kcals/day";
} else if (cutB.dataset.selected === "true") {
  goalB = -500;
  yourgoalB = "Cut";
  goalBCals = "less 500 kcals/day";
} else if (maintainB.dataset.selected === "true") {
  goalB = 0;
  yourgoalB = "Maintain";
  goalBCals = "0 extra kcals/day";
} else {
  window.alert("PLEASE SELECT YOUR EXERCISE GOAL");
  event.preventDefault();
  return;
}

if (!numericAgeB || numericAgeB < 18 || numericAgeB > 99) {
  window.alert("PLEASE ENTER AN AGE");
  event.preventDefault();
  return;
}

if (!numericHeightB || numericHeightB < 60 || numericHeightB > 252) {
  window.alert("PLEASE ENTER A HEIGHT");
  event.preventDefault();
  return;
}

if (!numericWeightB || numericWeightB < 38 || numericWeightB > 190) {
  window.alert("PLEASE ENTER A WEIGHT");
  event.preventDefault();
  return;
}

if (noneB.dataset.selected === "true") {
  activityFactorB = 1.2;
  exerciseB = "None";
  exerciseBSummary = "Little or no exercise";
  extraWaterB = 0;
} else if (lightB.dataset.selected === "true") {
  activityFactorB = 1.375;
  exerciseB = "Light";
  exerciseBSummary = "1-3 days/week";
  extraWaterB = 4;
} else if (mediumB.dataset.selected === "true") {
  activityFactorB = 1.55;
  exerciseB = "Medium";
  exerciseBSummary = "3-5 days/week";
  extraWaterB = 8;
} else if (highB.dataset.selected === "true") {
  activityFactorB = 1.725;
  exerciseB = "High";
  exerciseBSummary = "6-7 days/week";
  extraWaterB = 12;
} else if (extremeB.dataset.selected === "true") {
  activityFactorB = 1.9;
  exerciseB = "Extreme";
  exerciseBSummary = "Exercise & physical job";
  extraWaterB = 16;
} else {
  window.alert("PLEASE SELECT YOUR EXERCISE LEVEL");
  event.preventDefault();
  return;
}

let caloriesB = Math.round(bmrB * activityFactorB);

let bmiB = numericWeightB / ((numericHeightB/100)**2);

if (bmiB < 18) {
  weightClassB = "underweight.<br><br>Select 'Build muscle' and aim for a BMI score of 18.5";
  encourageB = "Oh dear!";
} else if (bmiB < 18.5) {
  weightClassB = "slightly underweight.<br><br>Select 'Build muscle' and aim for a BMI score of 18.5";
  encourageB = "So close!";
} else if (bmiB < 24.9) {
  weightClassB = "healthy weight.<br><br>Select 'Stay the same' to keep you BMI score between 18.5 and 24.9";
  encourageB = "Get in!";
} else if (bmiB < 25.5) {
  weightClassB = "slightly overweight.<br><br>Select 'Lose weight' and aim for a BMI score of 24.9";
  encourageB = "So close!";
} else if (bmiB < 29.9) {
  weightClassB = "overweight.<br><br>Select 'Lose weight' and aim for a BMI score of 24.9";
  encourageB = "Oh dear!";
} else {
  weightClassB = "obese.<br><br>Select 'Lose weight' and aim for a BMI score of 24.9";
  encourageB = "Oh dear!";
}

let caloriesBOut = caloriesB + goalB;
let bmiBOut = bmiB.toFixed(1);
let proteinB = Math.round(1.9 * numericWeightB);
let fatsB = Math.round((0.2 * caloriesBOut)/9);
let carbsB = Math.round(caloriesBOut - (proteinB * 4) - (fatsB * 9))/4;
let waterB = (0.0295735 * numericWeightB) + (extraWaterB * 0.0295735);
let waterBOut = waterB.toFixed(2);

const totalInchesB = numericHeightB / 2.54;
let feetB = Math.floor(totalInchesB / 12);
let inchesB = Math.round(totalInchesB % 12);

if (inchesB === 12) {
  feetB += 1;
  inchesB = 0;
}

const totalPoundsB = numericWeightB * 2.20462;
let poundsB = Math.round(totalPoundsB);

  resultsB.innerHTML = `
  <br>
    <table>
      <tr>
        <th colspan="2" style="text-align:center";>YOU SELECTED</th>
      </tr>
      <tr>
        <th>Gender:</th><td>${genderB}</td>
      </tr>
      <tr>
        <th>Goal:</th><td>${yourgoalB} (${goalBCals})</td>
      </tr>
      <tr>
        <th>Age:</th><td>${numericAgeB} yrs</td>
      </tr>
      <tr>
        <th>Height:</th><td>${numericHeightB} cm (${feetB}'${inchesB}")</td>
      </tr>
      <tr>
        <th>Weight:</th><td>${numericWeightB} kg (${poundsB} lbs)</td>
      </tr>
      <tr>
        <th>Exercise:</th><td>${exerciseB} (${exerciseBSummary})</td>
      </tr>
    </table>
      <h2>
        Your BMI score is: <span style="background-color:white;padding:1.25vw;text-decoration:underline;">${bmiBOut}</span>
      </h2>
        <p class="italic">
          ${encourageB} You are categorised as ${weightClassB}.
        </p>
    <table>
      <tr>
        <th colspan="2" style="text-align:center";>RECOMMENDED MACROS</th>
      </tr>
      <tr>
        <th>Daily Calories:</th><td>${caloriesBOut} kcal</td>
      </tr>
      <tr>
        <th>Daily Protein:</th><td>${proteinB} g</td>
      </tr>
      <tr>
        <th>Daily Carbs:</th><td>${carbsB} g</td>
      </tr>
      <tr>
        <th>Daily Fats:</th><td>${fatsB} g</td>
      </tr>
      <tr>
        <th>Daily Water *:</th><td>${waterBOut} litres</td>
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
        <a href="/index_b" class="reload_b" id="reload" aria-label="Return to macroBLASTER's home page">
          Reload
        </a>
`;
}