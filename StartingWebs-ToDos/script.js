// constants and variables
let maindos=document.getElementById('maindos');
let aval=parseInt(document.getElementById('aval').value);
let bval=parseInt(document.getElementById('bval').value);
let setaval=document.getElementById('setaval');
let score=0;
let scoreBtn=document.getElementById('Scorebtn');
document.getElementById('flexend').style.display='none';




// Add Table,Number and Remove Number From the Table
// Add Table Function
const AddTable=()=>{
    let a=parseInt(document.getElementById('aval').value);
    let b=parseInt(document.getElementById('bval').value);
    let idBox=0;
    let idRow=0;
    for (let i = 0; i < b; i++) {
        document.getElementById('maindos').innerHTML+=`<tr id='main${idRow}' class='mains'></tr>`
        for (let j = 0; j < a; j++) {
            document.getElementById(`main${idRow}`).innerHTML+=` <th id="box${idBox}" class="addNum"><span class="boxtext"></span></th>`
            idBox+=1;
        }
        idRow+=1;
    }
}

// Add Number From Table Boxes Function
const AddNum=()=>{
    let Num=1;
    Array.from(document.getElementsByClassName("addNum")).forEach(element =>{
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', ()=>{
            if(boxtext.innerText === ''){
                boxtext.innerText = Num;
                Num++;
            }
        });
    });
}

// Remove Number From Table Boxes Function
const RemoveNum=()=>{  
    document.getElementById('startPlaying').addEventListener("click",()=>{
        Array.from(document.getElementsByClassName("addNum")).forEach(element =>{
            let boxtext = element.querySelector('.boxtext');
            element.addEventListener('click', ()=>{
                if(boxtext.innerText){
                    boxtext.innerText = '';
                    element.style.background='rgb(255 253 185)';
                }
            });
        });
    });
}

// Scoring
const Scores=()=>{
    if (score===0) {
        document.getElementById('score').innerText='Score';
    }
    document.getElementById('Scorebtn').addEventListener("click",()=>{
        if (score!==parseInt((parseInt(document.getElementById('aval').value)+parseInt(document.getElementById('bval').value))/2)) {
            score+=1;
            document.getElementById('score').innerText=score;
        }
        if (score===parseInt((parseInt(document.getElementById('aval').value)+parseInt(document.getElementById('bval').value))/2)) {
            document.getElementById('score').innerText='You Win';
            score=score;
        }
    });
}



// Add some style displaying text during the Game
const Styles=()=>{
    document.getElementById('setval').addEventListener("click",()=>{
        document.getElementById('setval').style.display='none';
        document.getElementById('aval').style.display='none';
        document.getElementById('bval').style.display='none';
        document.getElementById('flexend').style.display='flex';
    });
}
Styles();






// Game Logic
document.getElementById('setval').addEventListener("click",()=>{
    AddTable();
    AddNum();
    RemoveNum();
    Scores();
    // s();
});


