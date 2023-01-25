wordNum = 0;
document.body.addEventListener('keydown', (event) => {
    //   if (event.code == "Enter") {
    //     // enterKeyContent();
    //     gameEngine();
    //   }
    //   else 
    buttonEngine();
    if (event.code == "KeyA") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>a</span>`;
    }
    else if (event.code == "KeyB") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>b</span>`;
    }
    else if (event.code == "KeyC") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>c</span>`;
    }
    else if (event.code == "KeyD") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>d</span>`;
    }
    else if (event.code == "KeyE") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>e</span>`;
    }
    else if (event.code == "KeyF") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>f</span>`;
    }
    else if (event.code == "KeyG") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>g</span>`;
    }
    else if (event.code == "KeyH") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>h</span>`;
    }
    else if (event.code == "KeyI") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>i</span>`;
    }
    else if (event.code == "KeyJ") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>j</span>`;
    }
    else if (event.code == "KeyK") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>k</span>`;
    }
    else if (event.code == "KeyL") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>l</span>`;
    }
    else if (event.code == "KeyM") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>m</span>`;
    }
    else if (event.code == "KeyN") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>n</span>`;
    }
    else if (event.code == "KeyO") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>o</span>`;
    }
    else if (event.code == "KeyP") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>p</span>`;
    }
    else if (event.code == "KeyQ") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>q</span>`;
    }
    else if (event.code == "KeyR") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>r</span>`;
    }
    else if (event.code == "KeyS") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>s</span>`;
    }
    else if (event.code == "KeyT") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>t</span>`;
    }
    else if (event.code == "KeyU") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>u</span>`;
    }
    else if (event.code == "KeyV") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>v</span>`;
    }
    else if (event.code == "KeyW") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>w</span>`;
    }
    else if (event.code == "KeyX") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>x</span>`;
    }
    else if (event.code == "KeyY") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>y</span>`;
    }
    else if (event.code == "KeyZ") {
        document.getElementById(`mainContent`).innerHTML += `<span id='word${wordNum}'>z</span>`;
    }
    else if (event.code == "Backspace") {
        if (document.getElementById(`mainContent`).innerText == "") {
            wordNum=0;
        } else {
            // console.log(document.getElementById(`mainContent`).lastChild)
            document.getElementById(`mainContent`).lastChild.replaceWith();
            // console.log(wordNum)
            wordNum -= 1;
            // console.log(wordNum)
        }
    }
    // if (document.getElementById(`mainContent`).innerHTML !== "") {
    //     if (wordNum == generatedWord.length) {
    //         wordNum = generatedWord.length;
    //     } else {
    //         wordNum++;
    //     }
    // }
    wordNum++;
})