let promptVal = prompt('Enter the no. of disks you want')
let tower1 = document.getElementById('tower1')
let tower2 = document.getElementById('tower2')
let tower3 = document.getElementById('tower3')
let tower1btn = document.getElementById('tower1btn')
let tower2btn = document.getElementById('tower2btn')
let tower3btn = document.getElementById('tower3btn')
let TowerOfHanoiAlgorithmChecker = true;
let modal = document.getElementById('modals')
document.getElementById('alert1').innerText = `Tower Of Hanoi`
document.getElementById('alert2').innerText = `Invalid Move`
document.getElementById('modals').style.display = "none";


document.getElementById('tower1').style.minHeight = '200px'
document.getElementById('tower2').style.minHeight = '200px'
document.getElementById('tower3').style.minHeight = '200px'

document.getElementById('tower1').style.minWidth = '200px'
document.getElementById('tower2').style.minWidth = '200px'
document.getElementById('tower3').style.minWidth = '200px'

// initialWidth
for (let i = 0; i < promptVal; i++) {
  tower1.innerHTML += `<div class="disks" id='disk${i}'>${promptVal - (i)}</div>`;
  document.getElementById(`disk${i}`).style.width = (50 + ((promptVal - i) * 10)) + 'px';
  // document.getElementById(`disk${i}`).style.width = (5 + ((promptVal - i)*1.3)) + 'vmin';
  // tower2.style.minWidth = (50 + ((i * 10))) + 'px';
  // tower3.style.minWidth = (50 + ((i * 10))) + 'px';
}



const reset = () => {
  tower1btn.innerText = 'T1'
  tower2btn.innerText = 'T2'
  tower3btn.innerText = 'T3'
}

const TowerOfHanoiAlert = () => {
  document.getElementById('modals').style.display = "flex";
  reset();
}
// if (document.getElementById('tower1').innerHTML == '') {
//     document.getElementById('tower1').style.minHeight = '200px'
// } else {
//     tower1.style.height = 'auto'
// }
// if (document.getElementById('tower2').innerHTML == '') {
//     document.getElementById('tower2').style.minHeight = '200px'
// } else {
//     tower1.style.height = 'auto'
// }
// if (document.getElementById('tower3').innerHTML == '') {
//     document.getElementById('tower3').style.minHeight = '200px'
// } else {
//     tower1.style.height = 'auto'
// }

wid = tower1.offsetWidth;
document.getElementById('tower1').style.minWidth = (wid - 9) + 'px';
document.getElementById('tower2').style.minWidth = (wid - 9) + 'px';
document.getElementById('tower3').style.minWidth = (wid - 9) + 'px';
hei = tower1.clientHeight;
document.getElementById('tower1').style.minHeight = (hei - 9) + 'px';
document.getElementById('tower2').style.minHeight = (hei - 9) + 'px';
document.getElementById('tower3').style.minHeight = (hei - 9) + 'px';

const tower1Algo = () => {
  TowerOfHanoiAlgorithmChecker = true;
  if (tower1btn.innerText == 'T1') {
    tower1btn.innerText = 'Cancel'
    tower2btn.innerText = 'Fetch'
    tower3btn.innerText = 'Fetch'
  } else if (tower1btn.innerText == 'Fetch') {
    if (tower2btn.innerText == 'Cancel') {
      if (tower1.innerHTML) {
        if (Number.parseInt(tower2.lastChild.innerText) > Number.parseInt(tower1.lastChild.innerText)) {
          // fetchingdata fetcheddata
          // alert('Hello World')
          TowerOfHanoiAlgorithmChecker = false;
          TowerOfHanoiAlert();
        }
      }
      if (TowerOfHanoiAlgorithmChecker == true) {
        tower1.appendChild(tower2.lastChild);
        // tower1.firstChild.remove();
        reset();
      }
    } else if (tower3btn.innerText == 'Cancel') {
      if (tower1.innerHTML) {
        if (Number.parseInt(tower3.lastChild.innerText) > Number.parseInt(tower1.lastChild.innerText)) {
          // fetchingdata fetcheddata
          // alert('Hello World')
          TowerOfHanoiAlgorithmChecker = false;
          TowerOfHanoiAlert();
        }
      }
      if (TowerOfHanoiAlgorithmChecker == true) {
        tower1.appendChild(tower3.lastChild);
        // tower1.firstChild.remove();
        reset();
      }
    }
  } else if (tower1btn.innerText == 'Cancel') {
    tower1btn.innerText = 'T1'
    tower2btn.innerText = 'T2'
    tower3btn.innerText = 'T3'
  }
}

const tower2Algo = () => {
  TowerOfHanoiAlgorithmChecker = true;
  if (tower2btn.innerText == 'T2') {
    tower1btn.innerText = 'Fetch'
    tower2btn.innerText = 'Cancel'
    tower3btn.innerText = 'Fetch'
  } else if (tower2btn.innerText == 'Fetch') {
    if (tower1btn.innerText == 'Cancel') {
      if (tower2.innerHTML) {
        if (Number.parseInt(tower1.lastChild.innerText) > Number.parseInt(tower2.lastChild.innerText)) {
          // fetchingdata fetcheddata
          // alert('Hello World')
          TowerOfHanoiAlgorithmChecker = false;
          TowerOfHanoiAlert();
        }
      }
      if (TowerOfHanoiAlgorithmChecker == true) {
        tower2.appendChild(tower1.lastChild);
        reset();
      }
      // tower1.firstChild.remove();
    } else if (tower3btn.innerText == 'Cancel') {
      if (tower2.innerHTML) {
        if (Number.parseInt(tower3.lastChild.innerText) > Number.parseInt(tower2.lastChild.innerText)) {
          // fetchingdata fetcheddata
          // alert('Hello World')
          TowerOfHanoiAlgorithmChecker = false;
          TowerOfHanoiAlert();
        }
      }
      if (TowerOfHanoiAlgorithmChecker == true) {
        tower2.appendChild(tower3.lastChild);
        reset();
      }
      // tower1.firstChild.remove();
    }
  } else if (tower2btn.innerText == 'Cancel') {
    tower1btn.innerText = 'T1'
    tower2btn.innerText = 'T2'
    tower3btn.innerText = 'T3'
  }
}

const tower3Algo = () => {
  TowerOfHanoiAlgorithmChecker = true;
  if (tower3btn.innerText == 'T3') {
    tower1btn.innerText = 'Fetch'
    tower2btn.innerText = 'Fetch'
    tower3btn.innerText = 'Cancel'
  } else if (tower3btn.innerText == 'Fetch') {
    if (tower1btn.innerText == 'Cancel') {
      if (tower3.innerHTML) {
        if (Number.parseInt(tower1.lastChild.innerText) > Number.parseInt(tower3.lastChild.innerText)) {
          // fetchingdata fetcheddata
          // alert('Hello World')
          TowerOfHanoiAlgorithmChecker = false;
          TowerOfHanoiAlert();
        }
      }
      if (TowerOfHanoiAlgorithmChecker == true) {
        tower3.appendChild(tower1.lastChild);
        reset();
      }
      // tower1.firstChild.remove();
    } else if (tower2btn.innerText == 'Cancel') {
      if (tower3.innerHTML) {
        if (Number.parseInt(tower2.lastChild.innerText) > Number.parseInt(tower3.lastChild.innerText)) {
          // fetchingdata fetcheddata
          // alert('Hello World')
          TowerOfHanoiAlgorithmChecker = false;
          TowerOfHanoiAlert();
        }
      }
      if (TowerOfHanoiAlgorithmChecker == true) {
        tower3.appendChild(tower2.lastChild);
        reset();
      }
      // tower1.firstChild.remove();
    }
  } else if (tower3btn.innerText == 'Cancel') {
    tower1btn.innerText = 'T1'
    tower2btn.innerText = 'T2'
    tower3btn.innerText = 'T3'
  }
}
document.getElementById('tower1btn').addEventListener('click', () => {
  if (document.getElementById('modals').style.display == "none") {
    tower1Algo();
  }
})
document.getElementById('tower2btn').addEventListener('click', () => {
  if (document.getElementById('modals').style.display == "none") {
    tower2Algo();
  }
})
document.getElementById('tower3btn').addEventListener('click', () => {
  if (document.getElementById('modals').style.display == "none") {
    tower3Algo();
  }
})

document.body.addEventListener('keydown', (event) => {
  if (event.code == 'KeyJ') {
    if (document.getElementById('modals').style.display == "none") {
      tower1Algo();
    }
  } else if (event.code == 'KeyK') {
    if (document.getElementById('modals').style.display == "none") {
      tower2Algo();
    }
  } else if (event.code == 'KeyL') {
    if (document.getElementById('modals').style.display == "none") {
      tower3Algo();
    }
  }
})