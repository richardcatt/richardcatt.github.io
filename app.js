const candyInfo = [
    {
        name: "Skittles",
        image: "images/skittles.jpg",
        price: 1.50,
        description: "Description of Candy Bar A"
    },
    {
        name: "AirHeads",
        image: "images/airheads.jpg",
        price: 2.00,
        description: "Description of Candy Bar B"
    },
    // Add more candy bars
];

let currentIndex = -1;
const candyImage = document.getElementById("candy-image");
const candyDescription = document.getElementById("candy-description");
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess");
const feedback = document.getElementById("feedback");

function showCandy() {
    currentIndex = Math.floor(Math.random() * candyInfo.length);
    const currentCandy = candyInfo[currentIndex];
    candyImage.src = currentCandy.image;
    candyDescription.textContent = currentCandy.description;
}

function checkGuess(event) {
    event.preventDefault();
    const userGuess = parseFloat(guessInput.value);
    const actualPrice = candyInfo[currentIndex].price;

    if (userGuess === actualPrice) {
        feedback.textContent = "Congratulations! Your guess is correct!";
    } else if (userGuess < actualPrice) {
        feedback.textContent = "Too low! Try again.";
    } else {
        feedback.textContent = "Too high! Try again.";
    }
}

guessForm.addEventListener("submit", checkGuess);

// Call the showCandy function when the page loads
showCandy();