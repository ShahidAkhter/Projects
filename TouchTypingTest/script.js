// variables and constants
let val = 0;
let score = 1;
let timerInterval;
let accuracyInterval;
let speedInterval;
// let time=prompt("Enter the time in minutes to practice:")
let time = 1;
let innerdata = document.getElementById("innerdata").innerText;
// It generates random Text for Typing
const randomTextGenerator = () => {
    a = 0;
    b = textGenerator.length - 1;
    c = Math.round(b - (b - a) * Math.random());
    // c = 10;
    // document.getElementById("innerdata").innerText = textGenerator[c];
    document.getElementById("loader").innerHTML = "Loading...";
    document.getElementById("innerdata").innerHTML = "";
    setTimeout(() => {
        for (let i = 0; i < textGenerator[c].length; i++) {
            document.getElementById("innerdata").innerHTML += `<span id="letter${i}" class="letters">${textGenerator[c][i]}</span>`;
        }
        document.getElementById("loader").innerHTML = "";
        document.getElementById("innerdata").innerHTML += `<span id="letter${textGenerator[c].length}" class="letters"></span>`;
    }, 1000);
    resetText();

}
const addText = async () => {
    document.getElementById("innerdata").innerHTML = "";
    for (let i = 0; i < textGenerator[d].length; i++) {
        document.getElementById("innerdata").innerHTML += `<span id="letter${i}" class="letters">${textGenerator[d][i]}</span>`
    }
    document.getElementById("loader").innerHTML = "";
    document.getElementById("innerdata").innerHTML += `<span id="letter${textGenerator[d].length}" class="letters"></span>`;
}
const resetData = async () => {
    document.getElementById("loader").innerHTML = "Loading...";
    pr = await addText();
}
const resetTexting = () => {
    // setTimeout(() => {
    d = c
    if (d == (textGenerator.length - 1)) {
        d = 0;
    } else {
        d++;
    }
    resetData();

    // }, 240);

}
// TImer, textarea auto selection or disabling auto text and disable text input when time is up
const timeFuctionInInterval = () => {
    if (document.getElementById('times').value == endTime) {
        document.getElementById('times').value = endTime;
        document.getElementById("textareas").disabled = true;
    } else {
        document.getElementById('times').value++;
    }
}
const timingfunction = () => {
    document.getElementById("textareas").select();
    document.getElementById("innerdata").disabled = true;
    document.getElementById("textareas").addEventListener('keydown', () => {
        if (document.getElementById('times').value == 'NaN') {
            document.getElementById('times').value = 0;
        }
    })
    endTime = 60 * time;
    timerInterval = setInterval(timeFuctionInInterval, 1000);
}
// Typing Speed Calculator
// Typing Speed Calculator Function
const speedWrites = () => {
    if (document.getElementById('speed').value == 'Speed' || document.getElementById('speed').value == 'NaN') {
        document.getElementById('speed').value = 0;
    } else {
        let arrtext = document.getElementById("textareas").value
        noOfSpaces = arrtext.split(' ').length - 1;
        document.getElementById('speed').value = noOfSpaces;
    }
}

// Typing Speed Calculator Interval
const speedometer = () => {
    document.getElementById('textareas').addEventListener('keydown', () => {
        speedInterval = setInterval(speedWrites, 1000);
    })
}

// Typing Accuracy Calculator
const accuracyFunction = () => {
    // document.getElementById('textareas').addEventListener('keydown', () => {
    //     if (document.getElementById('accuracy').value == "NaN" || document.getElementById('accuracy').value == "Accuracy") {
    //         this.value = 0;
    //     }
    // });
    w = 0;
    z = 0;
    for (let i = 0; i < document.getElementById("textareas").value.length; i++) {
        if (document.getElementById("innerdata").innerText[i] == document.getElementById("textareas").value[i]) {
            w++;
            if (document.getElementById('accuracy').value == 100) {
                document.getElementById("textareas").style.color = 'green';
            }
        }
        else if (document.getElementById("innerdata").innerText[i] != document.getElementById("textareas").value[i]) {
            z++;
            if (document.getElementById('accuracy').value < 100) {
                document.getElementById("textareas").style.color = 'red';
            }

        }
    }
    y = (w / (document.getElementById("textareas").value.length)) * 100;
    document.getElementById('accuracy').value = y;
}
const accuracy = () => {
    accuracyInterval = setInterval(accuracyFunction, 100);
}
// It finds the error in the text by changing the color
const errorDetector = () => {
    document.getElementById('textareas').addEventListener('keyup', () => {
        // console.time();
        // setTimeout(() => {
        Array.from(document.getElementsByClassName('letters')).forEach((element, index) => {
            // // console.log(index);
            if (document.getElementById(`textareas`).value.length > document.getElementById(`innerdata`).innerText.length) {
                // console.log('0');
                return;
            } else {
                if (!document.getElementById(`letter${document.getElementById(`textareas`).value.length}`)) {
                    document.getElementById(`letter${document.getElementById(`textareas`).value.length - 1}`).style.color = 'rgb(0, 0, 255)';
                    if (document.getElementById(`letter${document.getElementById(`textareas`).value.length - 1}`).innerText == " ") {
                        document.getElementById(`letter${document.getElementById(`textareas`).value.length - 1}`).style.background = 'rgb(0, 0, 255)';
                    }
                    // return;
                    // console.log('1');
                }
                // else if ((document.getElementById(`innerdata`).innerText.length - 1) == document.getElementById(`textareas`).value.length) {
                //     if (!document.getElementById(`letter${document.getElementById(`textareas`).value.length}`)) {
                //         document.getElementById(`letter${document.getElementById(`textareas`).value.length++}`).style.color = 'rgb(0, 0, 255)';
                //         if (document.getElementById(`letter${document.getElementById(`textareas`).value.length++}`).innerText == " ") {
                //             document.getElementById(`letter${document.getElementById(`textareas`).value.length++}`).style.background = 'rgb(0, 0, 255)';
                //         }
                //         console.log('2');
                //     }
                // } 
                else {
                    document.getElementById(`letter${document.getElementById(`textareas`).value.length}`).style.color = 'rgb(0, 0, 255)';
                    if (document.getElementById(`letter${document.getElementById(`textareas`).value.length}`).innerText == " ") {
                        document.getElementById(`letter${document.getElementById(`textareas`).value.length}`).style.background = 'rgb(0, 0, 255)';
                    }
                    // console.log('3');
                }
            }
            if (!document.getElementById(`textareas`).value[index]) {
                element.style.color = 'black';
                element.style.background = 'white';
            }
            else if (document.getElementById(`letter${index}`).innerText == document.getElementById(`textareas`).value[index]) {
                document.getElementById(`letter${index}`).style.color = 'green';
                if (document.getElementById(`letter${index}`).style.background == 'red' || document.getElementById(`letter${index}`).style.background == 'rgb(0, 0, 255)') {
                    document.getElementById(`letter${index}`).style.background = 'white';
                }
                // document.getElementById("innerdata").style.color = 'green';
            }
            else if (document.getElementById(`letter${index}`).innerText == " " && document.getElementById(`textareas`).value[index] != " ") {
                document.getElementById(`letter${index}`).style.background = 'red';
            }
            else {
                document.getElementById(`letter${index}`).style.color = 'red';
                // document.getElementById("innerdata").style.color = 'red';
            }
            // }
        });
        // }, 10);
        // console.timeEnd();
    })
}

const autoScroll = () => {
    window.addEventListener('keydown', (event) => {
        key = event.key
        if (key == 'ArrowDown') {
            document.getElementById('innerdata').scrollTo(0, +26);
        } else if (key == 'ArrowUp') {
            document.getElementById('innerdata').scrollTo(0, -26);
        }
    })
}
// todo
// const endText = () => {
//     document.getElementById('textareas').addEventListener('keypress', () => {
//         if (document.getElementById('innerdata').value == document.getElementById('textareas').value) {
//             resetTexting();
//             document.getElementById('speed').value = noOfSpaces;
//             document.getElementById('textareas').value = "";
//         }
//     })

// }

const startPrint = async () => {
    // document.getElementById(`marginBottom${val}`).style.marginBottom = '154px';
    document.getElementById('prints').style.display = 'none';
    document.getElementById('webname').style.display = 'none';
    document.getElementById('printNone').style.display = 'none';
    document.getElementById('moveToTop').style.display = 'none';
    document.getElementById('copyrightFooter').style.display = 'none';
    Array.from(document.getElementsByClassName('marginBottom ')).forEach(element => {
        element.style.height = '101vh';
    });
    Array.from(document.getElementsByClassName('mBottom ')).forEach(element => {
        element.innerHTML += `<div class="font copyrightTag">Copyright&copy; reserved TypingTest/Owner/ShahidAkhter</div>`;
    });
}
const middlePrint = async () => {
    // setTimeout(() => {
    window.print()
    // }, 10);
}
const endPrint = async () => {
    // setTimeout(() => {
    // document.getElementById(`marginBottom${val}`).style.marginBottom = '4px';
    document.getElementById('prints').style.display = 'flex';
    document.getElementById('webname').style.display = 'flex';
    document.getElementById('printNone').style.display = 'flex';
    document.getElementById('moveToTop').style.display = 'none';
    document.getElementById('copyrightFooter').style.display = 'flex';
    Array.from(document.getElementsByClassName('marginBottom ')).forEach(element => {
        document.getElementsByClassName('copyrightTag').innerHTML = ``;
        element.style.height = 'auto';
    });
    Array.from(document.getElementsByClassName('copyrightTag')).forEach(element => {
        element.innerText = ``;
    });
    // }, 20);

}

const printer = async () => {
    let f = await startPrint();
    let s = await middlePrint();
    let t = await endPrint()
}
document.getElementById('print').addEventListener('click', () => {
    if (document.getElementById('yourAnswer').innerText == "") {
        alert('Start Practicing to Print Your Work...')
    } else {
        printer();
    }
})
// It generates next text of the given text
const resetText = () => {
    d = c
    document.getElementById('reset').addEventListener('click', async () => {
        if (document.getElementById('textareas').value != "") {
            if (d == (textGenerator.length - 1)) {
                d = 0;
            } else {
                d++;
            }
            pl = await resetData();
        }
    })
}
const clearIntervals = () => {
    clearInterval(timerInterval);
    // setTimeout(() => {
    clearInterval(speedInterval);
    clearInterval(accuracyInterval);
    // console.log('Interval Cleared...')
}
htmlAnswer = async () => {
    // document.getElementById("loader").innerHTML = "Loading...";
    document.getElementById('yourAnswer').innerHTML += `
    <div id="answer${score}" class="answersClass marginBottom">
    <nav class="name background navInAnswers" id="navigate${score}">TypingTest: Practice-${score}</nav>
    <div id="typingData" class="typingData flex">
    <div class="singledata flex-col">
    <label for="times">Timer</label>
    <input type="button" value="${document.getElementById('times').value}">
            </div>
            <div class="singledata flex-col">
                <label for="speed">Speed</label>
                <input type="button" value="${document.getElementById("speed").value}">
                </div>
                <div class="singledata flex-col">
                <label for="accuracy">Accuracy</label>
                <input type="button" value="${document.getElementById("accuracy").value}">
            </div>
            </div>
            <div class="flex flex-col mBottom">
            <div class="user-selection dis fetchedDocs" id="text${val}" cols="30" rows="16"></div>
            <div id="coloring${val}" class="user-selection dis fetchedDocs" cols="30" rows="16">${document.getElementById("textareas").value}</div>
            </div>
            </div>`;
}
designinghtmlAnswers=async()=>{
    let val1 = 0
    for (let i = n; i < document.getElementById(`innerdata`).innerText.length + n; i++) {
        // const element = document.getElementById('innerdata').innerText[i];
        document.getElementById(`text${val}`).innerHTML += `<span id="letterdata${i}">${document.getElementById(`letter${val1}`).innerText}</span>`
        if (document.getElementById(`letter${val1}`).style.color == 'green') {
            document.getElementById(`letterdata${i}`).style.color = 'green'
        } else if (document.getElementById(`letter${val1}`).style.color == 'red') {
            document.getElementById(`letterdata${i}`).style.color = 'red'
        } else if (document.getElementById(`letter${val1}`).style.color == 'rgb(0, 0, 255)') {
            document.getElementById(`letterdata${i}`).style.color = 'rgb(0, 0, 255)'
        }
        if (document.getElementById(`letter${val1}`).style.background == 'red') {
            document.getElementById(`letterdata${i}`).style.background = 'red';
        } else if (document.getElementById(`letter${val1}`).style.background == 'rgb(0, 0, 255)') {
            document.getElementById(`letterdata${i}`).style.background = 'rgb(0, 0, 255)';
        }
        val1++;
        n = document.getElementById(`innerdata`).innerText.length + n + 1
        if (document.getElementById('accuracy').value == 100) {
            document.getElementById(`coloring${val}`).style.color = 'green';
        } else {
            document.getElementById(`coloring${val}`).style.color = 'red';
        }
    }
}
let n = 0;
// Connect whole code by using arrow Function
const addData = async () => {
    // document.getElementById('reset').style.display = 'none';
    // texting = document.getElementById('textareas')
    // setTimeout(() => {
    clearIntervals();
    htmlawaiting=await htmlAnswer();
    designinghtmlAnswersawait=await designinghtmlAnswers()

    document.getElementById(`text${val}`).disabled = true;
    document.getElementById(`coloring${val}`).disabled = true;
    document.getElementById('practiceScore').value = score;
    score++;
    val++;
    speedInterval = setInterval(speedWrites, 1000);
    accuracyInterval = setInterval(accuracyFunction, 100);
    timerInterval = setInterval(timeFuctionInInterval, 1000);
    ar = await addText()
    // document.getElementById('reset').style.display = 'flex';
    document.getElementById("loader").innerHTML = "";
    // }, 100);
}
// Reset button to reset it as, it reloading page but not reloads
// const ResetButton = async() => {
    document.getElementById('reset').addEventListener('click', async() => {
        if (document.getElementById('textareas').value != "") {
            document.getElementById("loader").innerHTML = "Loading...";
            gkr=await addData();
            document.getElementById("loader").innerHTML = "";

            document.getElementById("textareas").disabled = false;
            document.getElementById('times').value = 'NaN'
            document.getElementById("accuracy").value = "NaN"
            document.getElementById('speed').value = 'NaN'
            document.getElementById("textareas").value = ""
            document.getElementById("textareas").select();
        }
        // document.getElementById('innerdata').innerHTML="";
        // setTimeout(() => {
            // resetTexting();
        // }, 4000);
    })
// }
const scrollToTopButton = () => {
    window.onscroll = function () { scrollTopFunction() };
}
const scrollTopFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 300) {
        document.getElementById('moveToTop').style.display = "flex";
    } else {
        document.getElementById('moveToTop').style.display = "none";
    }
}
document.getElementById('moveToTop').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
// const ColorOfScrollBar=()=>{
//     window.addEventListener('scroll',()=>{
//         document.body.style.webkitScrollBarThumb="rgb(0, 183, 255)";
//     })
// }
// ColorOfScrollBar();
scrollToTopButton();
// ResetButton();
const gameConnector = () => {
    // endText();
    errorDetector();
    timingfunction();
    speedometer();
    accuracy();
    autoScroll();
    // printer();
    randomTextGenerator();
}
gameConnector();