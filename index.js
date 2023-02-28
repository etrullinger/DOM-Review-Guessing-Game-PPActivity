let randomNumber = Math.floor(Math.random() * 100) + 1;
let output = document.querySelector("#output");
let counter = 0;

function numberMatch() {
    let guess = document.querySelector("#guess").value;
    if (counter < 5) {
        if (guess != randomNumber) {
            if (guess > randomNumber) {
                output.textContent = "Guess again. Try a lower number.";
                counter++;
            } else {
                output.textContent = "Guess again. Try a higher number.";
                counter++;
            }
        } else {
            output.textContent = "Congratulations YOU WIN!";
        }
    } else {
        output.textContent = "Sorry you ran out of guesses. Better luck next time!";
    }
}

function reset() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    output.textContent = "A new random number has been generated."
    counter = 0;
}