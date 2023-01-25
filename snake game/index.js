// Constant and Variables
let inputDir = { x: 0, y: 0 }
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
const player = new Audio('music/playing.gif');
let volumes = document.getElementById('volume');
lastPaintTime = 0;
score = 0;
snakeArr = [{ x: 12, y: 14 }];
food = { x: 6, y: 10 };
speed = Number.parseInt(prompt('Enter the speed of your snake'));
if (!speed) {
    speed=10;
}
lastGridnum = 18;
a = 2;
b = lastGridnum - 2;
volumes.value = 10;
const volumemeter = () => {
    musicSound.volume = volumes.value / 100;
    foodSound.volume = volumes.value / 100;
    gameOverSound.volume = volumes.value / 100;
    player.volume = volumes.value / 100;
    moveSound.volume = volumes.value / 100;
}
volumemeter();
volumes.addEventListener('change',()=>{
    volumemeter();
})

// setTimeout(() => {
//     musicSound.play();
// }, 10);
// Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    musicSound.play();
    gameEngine();
}

function isCollide(snake) {
    // if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snake[0].x && snakeArr[i].y === snake[0].y) {
            return true;
        }
    }
    // if you bump into wall
    if (snake[0].x >= lastGridnum || snake[0].x <= 0 || snake[0].y >= lastGridnum || snake[0].y <= 0) {
        return true;
    }
}
function gameEngine() {
    // Part 1: Updating the snake array and food

    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert('Game Over. Press Enter Key OR Okay Button To Start Game Again!!!!');
        snakeArr = [{ x: 12, y: 14 }];
        // food = { x: 12, y: 14 };
        musicSound.play();
        score = 0;
        scoreBox.innerHTML = "Score: " + score;
        document.getElementById('gifplayer').style.display = "none";
    }
    // if you have eaten the food, increment score and regenerate the food
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        foodSound.play();
        score += 1;
        if (score > hiscoreval) {
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "High-Score: " + hiscoreval;
            document.getElementById('gifplayer').style.display = "block";
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    //Moving the snake

    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
    // Part 2: Displaying the snake and food
    // Displaying the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Displaying the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}




// main logic start here
let hiscore = localStorage.getItem("hiscore");
if (hiscore === null) {
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
}
else {
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "High-Score: " + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } //Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
    }
});

function up() {
    console.log("ArrowUp");
    moveSound.play();
    inputDir.x = 0;
    inputDir.y = -1;
}
function down() {
    console.log("ArrowDown");
    moveSound.play();
    inputDir.x = 0;
    inputDir.y = 1;
}
function left() {
    console.log("ArrowLeft");
    moveSound.play();
    inputDir.x = -1;
    inputDir.y = 0;
}
function right() {
    console.log("ArrowRight");
    moveSound.play();
    inputDir.x = 1;
    inputDir.y = 0;
}




// Function button reset hiscore
function reset() {
    localStorage.clear();
    console.log("Successfully Reset Done!!!")
    if (hiscore === null) {
        hiscore = 0;
    }
    else {
        hiscore != 0;
        hiscoreval = JSON.parse(hiscore);
        hiscoreBox.innerHTML = "High-Score: " + hiscore;
    }
    setTimeout(() => {
        hiscoreBox.innerHTML = "High-Score: " + hiscore;
    }, 100);
}