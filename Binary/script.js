number = 0;
arrNum = [1 / 256, 1 / 128, 1 / 64, 1 / 32, 1 / 16, 1 / 8, 1 / 4, 1 / 2, 1, 2, 4, 8, 16, 32, 64, 128,]
arrbuttonkeys = ["a", "s", "d", "f", "j", "k", "l", ";", "q", "w", "e", "r", "u", "i", "o", "p"]
html = ""
for (let i = 0; i < arrbuttonkeys.length; i++) {
    // const element = arrbuttonkeys[i];
    html += `<div class="buttonsDescContainer flex alignItemsCenter justifyContentCenter flex-col" id="buttonContains${i}">
                <div class="buttonsDescContainer flex alignItemsCenter justifyContentCenter flex-col" id="buttonContainerDesc${i}">
                    <div class="buttons buttonDesc" id="buttonDesc${i}">${arrbuttonkeys[i]}</div>
                </div>
                <div class="buttonsContainer flex alignItemsCenter justifyContentCenter flex-col" id="buttonContainer${i}">
                    <div class="buttons" id="button${i}">0</div>
                </div>
            </div>`;
}
document.getElementById('allButtons').innerHTML = html;
html="";
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

for (let i = 0; i < arrNum.length; i++) {
    // const element = arrNum[i];
    ChangeText(document.getElementById(`button${i}`), arrbuttonkeys[i], arrNum[arrNum.length - (i + 1)]);
}
