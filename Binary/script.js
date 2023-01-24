number = 0;
arrNum = [1, 2, 4, 8, 16, 32, 64, 128]
arrbuttonkeys=["a","s","d","f","g","h","j","k","l",";"]

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
        container.style.color="green"
    } else {
        container.innerText = "0";
        container.style.color="red"
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
ChangeText(document.getElementById("button1"), arrbuttonkeys[0], arrNum[arrNum.length - 1]);
ChangeText(document.getElementById("button2"), arrbuttonkeys[1], arrNum[arrNum.length - 2]);
ChangeText(document.getElementById("button3"), arrbuttonkeys[2], arrNum[arrNum.length - 3]);
ChangeText(document.getElementById("button4"), arrbuttonkeys[3], arrNum[arrNum.length - 4]);
ChangeText(document.getElementById("button5"), arrbuttonkeys[6], arrNum[arrNum.length - 5]);
ChangeText(document.getElementById("button6"), arrbuttonkeys[7], arrNum[arrNum.length - 6]);
ChangeText(document.getElementById("button7"), arrbuttonkeys[8], arrNum[arrNum.length - 7]);
ChangeText(document.getElementById("button8"), arrbuttonkeys[9], arrNum[arrNum.length - 8]); 
