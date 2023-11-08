document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("btn-calccalor");
    const resultParagraph = document.getElementById("resultado");


    calculateButton.addEventListener("click", calculateCalories);

    function calculateCalories() {
        const weight = parseFloat(document.getElementById("peso").value.replace(",", "."));
        const age = parseInt(document.getElementById("idade").value);
        const height = parseFloat(document.getElementById("altura").value.replace(" cm", ""));
        const selectedObjective = document.querySelector('input[name="objetivo"]:checked').value;

        resultParagraph.textContent = ``;

        if (isNaN(weight) || isNaN(age) || isNaN(height)) {
            resultParagraph.textContent = "Por favor, insira valores válidos.";
        } else {
            const gender = "female";
            const activityLevel = 1.375;
            let bmr;

            if (gender === "female") {
                bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
            } else {
                bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
            }

            let tdee;
            if (selectedObjective === "manter") {
                let videoManter = document.querySelector('.video-manter')
                videoManter.style.display='flex'
                tdee = bmr * activityLevel;
            } else if (selectedObjective === "engordar") {
                let videoEngordar = document.querySelector('.video-engordar')
                videoEngordar.style.display='block'
                tdee = bmr * activityLevel + 500;
            } else if (selectedObjective === "emagrecer") {
                let videoEmagrecer = document.querySelector('.video-emagrecer')
                videoEmagrecer.style.display='block'
                tdee = bmr * activityLevel - 500;
            }

            resultParagraph.textContent = `Para que você consiga ${selectedObjective} você deve ingerir ${tdee.toFixed(2)} calorias por dia.`;
        }
    }
});
