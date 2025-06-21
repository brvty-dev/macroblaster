document.addEventListener("DOMContentLoaded", function () {

    function populateAgeListB() {

    const ageSelectB = document.getElementById("ageB");

        for (let ageB = 18; ageB <= 99; ageB +=1) {
        const option = document.createElement("option");

        option.value = ageB;
        option.textContent = `${ageB.toFixed(0)} yrs`;

        ageSelectB.appendChild(option);
        }

        ageSelectB.style.backgroundColor = "#CBF83E";
        ageSelectB.style.paddingLeft = "30%";

        ageSelectB.addEventListener("change", function () {
            if (ageSelectB.value === "") {
                ageSelectB.style.backgroundColor = "#CBF83E";
                ageSelectB.style.paddingLeft = "30%";
            } else {
                ageSelectB.style.backgroundColor = "#ffff00";
                ageSelectB.style.paddingLeft = "10%";
            }
        });
    }
  
    populateAgeListB();

    function populateHeightListB() {
    const heightSelectB = document.getElementById("heightB");

    for (let heightB = 60; heightB <= 252; heightB++) {
        const option = document.createElement("option");

        const totalInchesB = heightB / 2.54;
        let feetB = Math.floor(totalInchesB / 12);
        let inchesB = Math.round(totalInchesB % 12);

        // Fix rare rounding issue (e.g. 5'12")
        if (inchesB === 12) {
        feetB += 1;
        inchesB = 0;
        }

        option.value = heightB;
        option.textContent = `${heightB} cm (${feetB}'${inchesB}")`;

        heightSelectB.appendChild(option);
        }

        heightSelectB.style.backgroundColor = "#CBF83E";
        heightSelectB.style.paddingLeft = "30%";

        heightSelectB.addEventListener("change", function () {
            if (heightSelectB.value === "") {
                heightSelectB.style.backgroundColor = "#CBF83E";
                heightSelectB.style.paddingLeft = "30%";
            } else {
                heightSelectB.style.backgroundColor = "#ffff00";
                heightSelectB.style.paddingLeft = "10%";
            }
        });
    }

    populateHeightListB();

    function populateWeightListB() {
    const weightSelectB = document.getElementById("weightB");

    for (let weightB = 38.0; weightB <= 190.0; weightB += 0.5) {
        const option = document.createElement("option");

        const poundsB = weightB * 2.20462;
        option.value = weightB.toFixed(1);
        option.textContent = `${weightB.toFixed(1)} kg (${Math.round(poundsB)} lbs)`;

        weightSelectB.appendChild(option);
        }

        weightSelectB.style.backgroundColor = "#CBF83E";
        weightSelectB.style.paddingLeft = "30%";

        weightSelectB.addEventListener("change", function () {
            if (weightSelectB.value === "") {
                weightSelectB.style.backgroundColor = "#CBF83E";
                weightSelectB.style.paddingLeft = "30%";
            } else {
                weightSelectB.style.backgroundColor = "#ffff00";
                weightSelectB.style.paddingLeft = "2.5%";
            }
        });
    }

    populateWeightListB();

});