let body = document.getElementById("background");
let button = document.getElementById("generate");
let gradientValues = document.querySelector("h2");

/* GENERATES VALUES BETWEEN 1 AND 255 */

function randomValue() {
    return Math.ceil(Math.random() * 255);
};

/* RGB RANDOM VALUES TO BE ADDED TO FUNCTION BELOW */

function rgb() {
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

/*These are the values assigned to linear gradient*/

function linearGradient() {
    body.style.background = `linear-gradient(to right, ${rgb()}, ${rgb()})`;

    gradientValues.textContent = "Current Values: " + body.style.background;
}

button.addEventListener("click", linearGradient);

