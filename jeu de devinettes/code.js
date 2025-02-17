//its better to use let, const than var when defining variables in js because of the block-scope (unlike the function scope of var) also u risk less changing accidently values of ur variables with let and const
let randomnumber;
let nbofattempts;
let difficulty;
let range;
let max;
const errorsound=new Audio("648425__krokulator__error1.wav");
const successSound = new Audio("264981__renatalmar__sfx-magic.wav");
const failsound = new Audio("331912__kevinvg207__wrong-buzzer.wav");
const gameoversound=new Audio("76376__deleted_user_877451__game_over.wav");
const difficultySelect = document.querySelector(".form-select");
const playButton = document.querySelector(".btn");
const gameArea = document.getElementById("game-area");
const guessInput = document.querySelector(".form-control");
const guessButton = document.querySelector(".btn-success");
const alertBox = document.querySelector(".alert-info");
const replaybutton=document.getElementById("replay");
playButton.addEventListener("click", function () {
    difficulty = difficultySelect.value; // Get selected difficulty

    if (difficulty === "1") {
        attempts = 10; // Easy
        randomnumber = Math.floor(Math.random() * 100) + 1;
        range = "1-100";
        max=100;
        guessInput.setAttribute("max",100);
    } else if (difficulty === "2") {
        attempts = 7; // Medium
        randomnumber = Math.floor(Math.random() * 500) + 1;
        range = "1-500";
        max=500;
        guessInput.setAttribute("max",500);
    } else if (difficulty === "3") {
        attempts = 5;
        randomnumber = Math.floor(Math.random() * 1000) + 1;
        range = "1-1000";
        max=1000;
        guessInput.setAttribute("max",1000);

    } else {
        alert("Please select a difficulty level!");
        return;
    }
    gameArea.classList.remove("hidden");
    guessButton.disabled = false;
    replaybutton.disabled = true;
    alertBox.textContent = `🍀 You have ${attempts} attempts and the range is ${range}! Good luck! 🍀 `; 
});

guessButton.addEventListener("click", function () {
    let guess = parseInt(guessInput.value); //parseint is to convert the users input to an integer 
    if (isNaN(guess) || guess < 1 || guess > max) {
        errorsound.play();
        alertBox.textContent = `⚠️ Enter a number between 1 and  ${max} !`;
        return;
    }
    if (guess === randomnumber) {
        successSound.play();
        alertBox.style.backgroundColor = "lightgreen";
        alertBox.textContent = `🎉 Correct! The number was ${randomnumber}! 🎉`;
        guessButton.disabled = true;
        replaybutton.disabled=false;
    } 
    else {
        attempts--;
        if (attempts > 0) {
            failsound.play();
            if (guess > randomnumber) {
                alertBox.textContent = `❌ Try lower! You have ${attempts} attempts left.`;}
            else if (guess < randomnumber) {
                alertBox.textContent = `❌ Try higher! You have ${attempts} attempts left.`;
            }
        } else {
            alertBox.style.backgroundColor = "red";
            gameoversound.play();
            alertBox.textContent = `💀 Game Over! The correct number was ${randomnumber}. 💀`;
            guessButton.disabled = true;
            replaybutton.disabled=false;

        }
    }
});
replaybutton.addEventListener("click", function () {
    gameArea.classList.add("hidden");
    difficultySelect.value = "0";
    guessInput.value = "";
    alertBox.style.backgroundColor = "lightpink";
    alertBox.textContent = `🍀 Good luck! 🍀`;
    replaybutton.disabled = true;
});

