mainInput = document.getElementById('mainInput');
btn = document.getElementsByClassName('btn');
val1 = "";
mainInput.disabled=true;
Array.from(document.getElementsByClassName('btn')).forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            val1 = mainInput.value;
            // console.log(mainInput.value)
        }
    })

});
// console.log(document.getElementsByClassName('btn').value)
// console.log(document.getElementsByClassName('mainInput').value)
Array.from(document.getElementsByClassName('btn')).forEach(element => {
    element.addEventListener('click', (e) => {
        // console.log(Math.PI)
        if (e.target.innerText == '=') {
            mainInput.value = eval(mainInput.value);
        }
        else if (e.target.innerText == 'CE') {
            // console.log(mainInput.value.length)
            let val = mainInput.value;
            let val0 = ''
            for (let i = 0; i < mainInput.value.length - 1; i++) {
                val0 += val[i]
            }
            // console.log(val)
            mainInput.value = val0;
        }
        else if (e.target.innerText == 'C') {
            mainInput.value = '';
        }
        else if (e.target.innerText == 'EE') {
            mainInput.value += 'e';
        }
        else if (e.target.innerText == 'B') {
            mainInput.value = val1;
        }
        else if (e.target.innerText == 'x') {
            mainInput.value += '*';
        }
        else if (e.target.innerText == 'sin') {
            val2=mainInput.value;
            val3=val2*(Math.PI/180);
            mainInput.value = Math.sin(val3);
        }
        else if (e.target.innerText == 'cos') {
            val4=mainInput.value;
            val5=val4*(Math.PI/180);
            mainInput.value = Math.cos(val5);
        }
        else if (e.target.innerText == 'tan') {
            val6=mainInput.value;
            val7=val6*(Math.PI/180);
            mainInput.value = Math.tan(val7);
        }
        else {
            mainInput.value += e.target.innerText;
        }
    })

});