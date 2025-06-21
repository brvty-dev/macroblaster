document.addEventListener("DOMContentLoaded", function () {

    function populateAgeList() {

    const ageSelect = document.getElementById("age");

        for (let age = 18; age <= 99; age +=1) {
        const option = document.createElement("option");

        option.value = age;
        option.textContent = `${age.toFixed(0)} yrs`;

        ageSelect.appendChild(option);
        }

        ageSelect.style.paddingLeft = "30%";

        ageSelect.addEventListener("change", function () {
            if (ageSelect.value === "") {
                ageSelect.style.paddingLeft = "30%";
            } else {
                ageSelect.style.paddingLeft = "10%";
            }
        });
    }
  
    populateAgeList();

    function populateHeightList() {
    const heightSelect = document.getElementById("height");

    for (let height = 60; height <= 252; height++) {
        const option = document.createElement("option");

        const totalInches = height / 2.54;
        let feet = Math.floor(totalInches / 12);
        let inches = Math.round(totalInches % 12);

        // Fix rare rounding issue (e.g. 5'12")
        if (inches === 12) {
        feet += 1;
        inches = 0;
        }

        option.value = height;
        option.textContent = `${height} cm (${feet}'${inches}")`;

        heightSelect.appendChild(option);
        }

        heightSelect.style.paddingLeft = "30%";

        heightSelect.addEventListener("change", function () {
            if (heightSelect.value === "") {
                heightSelect.style.paddingLeft = "30%";
            } else {
                heightSelect.style.paddingLeft = "10%";
            }
        });
    }

    populateHeightList();

    function populateWeightList() {
    const weightSelect = document.getElementById("weight");

    for (let weight = 38.0; weight <= 190.0; weight += 0.5) {
        const option = document.createElement("option");

        const pounds = weight * 2.20462;
        option.value = weight.toFixed(1);
        option.textContent = `${weight.toFixed(1)} kg (${Math.round(pounds)} lbs)`;

        weightSelect.appendChild(option);
        }

        weightSelect.style.paddingLeft = "30%";

        weightSelect.addEventListener("change", function () {
            if (weightSelect.value === "") {
                weightSelect.style.paddingLeft = "30%";
            } else {
                weightSelect.style.paddingLeft = "2.5%";
            }
        });
    }

    populateWeightList();

});