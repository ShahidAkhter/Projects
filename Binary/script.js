// Variables and Constants
number = 0;
arrbuttonkeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]


// Varibles to Get Input from the user
beforeDecimal = Number.parseInt(prompt("Enter the level of Number you want before decimal point: "))
afterDecimal = Number.parseInt(prompt("Enter the level of Number you want after decimal point"))


// Functions
// Adding HTML Using JS Dynamically
let myHTML = (n) => {
    html = ""
    document.getElementById('allButtons').innerHTML="";
    for (let i = 0; i < n; i++) {
        // const element = arrbuttonkeys[i];
        if (i >= beforeDecimal) {
            html = `<div class="buttons buttonDesc" id="buttonDesc${i}">.${arrbuttonkeys[i]}</div>`;
        } else {
            html = `<div class="buttons buttonDesc" id="buttonDesc${i}">${arrbuttonkeys[i]}</div>`;
        }
        document.getElementById('allButtons').innerHTML += `<div class="buttonContainsTwoButtons flex alignItemsCenter justifyContentCenter flex-col" id="buttonContains${i}">
        <div class="buttonsDescContainers flex alignItemsCenter justifyContentCenter flex-col" id="buttonContainerDesc${i}">
        ${html}
        </div>
        <div class="buttonsContainer flex alignItemsCenter justifyContentCenter flex-col" id="buttonContainer${i}">
        <div class="buttons" id="button${i}">0</div>
        </div>
        </div>`;
        document.getElementById(`buttonDesc${i}`).style.width = 90 / (beforeDecimal + afterDecimal) + "vw"
        document.getElementById(`button${i}`).style.width = 90 / (beforeDecimal + afterDecimal) + "vw"
        // document.getElementById(`button${i}`).style.fontSize = (beforeDecimal + afterDecimal) + "vw"
    }
    html = "";
    // console.log(document.getElementById("allButtons").innerHTML)
    if (document.getElementById("allButtons").innerHTML!=="") {
        document.getElementById("allButtons").style.opacity = "1";
    }
    return true;
}

// Used to get container or element in the HTML body which by getting it do some work related to that particular element or container
let ChangeText = (container, key, val) => {
    document.body.addEventListener("keydown", (event) => {
        if (event.key == key) {
            switchChanger(container, val)
        }
    })
    container.addEventListener('click', () => {
        switchChanger(container, val)
    })
}

// Changing Switch according to the situation (if 0?1:0)
let switchChanger = (container, val) => {
    if (container.innerText == '0') {
        container.innerText = "1";
        container.style.color = "green"
    } else {
        container.innerText = "0";
        container.style.color = "red"
    }
    Calculations(container, val);
    document.getElementById('textID').innerText = number
}

// Doing Calculations accourding when Switch will ON(1 in the box)
let Calculations = (container, val) => {
    if (container.innerText === "1") {
        number = number + val;
        // console.log(val)
    } else {
        number = number - val;
    }
    return number;
}


// Running Functions and done some work
myHTML(beforeDecimal + afterDecimal); // 2+2 === 4
Num = 1;
for (let i = beforeDecimal; i < (beforeDecimal + afterDecimal); i++) {
    Num = Num * 2; // (1*2) === 2, (2*2) === 4
    ChangeText(document.getElementById(`button${i}`), arrbuttonkeys[i], (1 / Num));
}
if (beforeDecimal !== afterDecimal) {
    Num = Math.pow(2, beforeDecimal)
}
// console.log(Num)
for (let i = 0; i < beforeDecimal; i++) {
    Num = Num / 2; // (4/2) === 2, (2/2) === 1
    ChangeText(document.getElementById(`button${i}`), arrbuttonkeys[i], Num);
}
