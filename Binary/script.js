number = 0;
// arrNum = [1 / 256, 1 / 128, 1 / 64, 1 / 32, 1 / 16, 1 / 8, 1 / 4, 1 / 2, 1, 2, 4, 8, 16, 32, 64, 128,]
arrbuttonkeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
beforeDecimal = Number.parseInt(prompt("Enter the Number: "))
afterDecimal = Number.parseInt(prompt("Enter the Number: "))
let myHTML = (n) => {
    html = ""
    html0 = ""
    for (let i = 0; i < n; i++) {
        // const element = arrbuttonkeys[i];
        if (i >= beforeDecimal) {
            html0 = `<div class="buttons buttonDesc" id="buttonDesc${i}">.${arrbuttonkeys[i]}</div>`;
        } else {
            html0 = `<div class="buttons buttonDesc" id="buttonDesc${i}">${arrbuttonkeys[i]}</div>`;
        }
        html += `<div class="buttonContainsTwoButtons flex alignItemsCenter justifyContentCenter flex-col" id="buttonContains${i}">
        <div class="buttonsDescContainers flex alignItemsCenter justifyContentCenter flex-col" id="buttonContainerDesc${i}">
        ${html0}
        </div>
        <div class="buttonsContainer flex alignItemsCenter justifyContentCenter flex-col" id="buttonContainer${i}">
        <div class="buttons" id="button${i}">0</div>
        </div>
        </div>`;
    }
    document.getElementById('allButtons').innerHTML = html;
    html = "";
    html0 = "";
    return true;
}

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
let Calculations = (container, val) => {
    if (container.innerText === "1") {
        number = number + val;
        // console.log(val)
    } else {
        number = number - val;
    }
    return number;
}
myHTML(beforeDecimal + afterDecimal); // 2 === 4
// num = 1;
Num = "1";
for (let i = 0; i < beforeDecimal; i++) {
    Num+="*2"
} // arr=[1,2]
// console.log(arrNum)
// 1, 2
// console.log(Num)
Num=Number.parseInt(eval(Num));
for (let i = 0; i < beforeDecimal; i++) {
    // const element = arrNum[i];
    ChangeText(document.getElementById(`button${i}`), arrbuttonkeys[i], Num/2);
    Num=Num/2;
}
// console.log(Num)
// 2, 4 === 2, 3 
// 1, 2 === 1/(1), 1/(2)
// 2
for (let i = beforeDecimal; i < (beforeDecimal + afterDecimal); i++) {
    // const element = n[i];
    ChangeText(document.getElementById(`button${i}`), arrbuttonkeys[i], 1 / (Num*2));
    Num=Num*2;
}
// console.log(Num)
