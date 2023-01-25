console.log('hello world')
document.getElementById("question").disabled = true;
const timing = () => {
    document.getElementById("qBtn").addEventListener('click', () => {
        if (document.getElementById('time').value == 'NaN') {
            document.getElementById('time').value = 0;
        }
    })
    endTime = 60;
    setInterval(() => {
        if (document.getElementById('time').value == endTime) {
            document.getElementById('time').value = endTime;
            document.getElementById("answer").disabled = true;
        } else {
            document.getElementById('time').value++;
        }
    }, 1000);
}
timing();
const randomOperator = () => {
    textGenerator = [
        '+',
        '-',
        '*',
        '/',
    ]
    d = 0;
    e = textGenerator.length - 1;
    f = Math.round(e - (e - d) * Math.random());
    arr = textGenerator[f];
}
randomOperator();

randomNumGenAns = () => {
    a = 0;
    b = 1000;
    c = Math.round(b - (b - a) * Math.random());
    g = Math.round(b - (b - a) * Math.random());
    document.getElementById("qBtn").addEventListener('click', () => {
        document.getElementById('question').innerText = `${c} ${arr} ${g}`;
        evaluation = eval(c + arr + g);
        document.getElementById("qBtn").style.display = 'none'
        document.getElementById("answer").select();
        setTimeout(() => {
            document.getElementById('question').innerText = `${c} ${arr} ${g}= ${evaluation}`;
        }, 60000);
    })
}
randomNumGenAns();
const questionChecker = () => {
    let val = 0;
    document.getElementById('answer').addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            document.getElementById('yourAnswer').scrollTo(0, 50000);
            if (parseFloat(document.getElementById('answer').value) != parseFloat(evaluation)) {
                // document.getElementById('answer').value=``;
                document.getElementById('yourAnswer').innerHTML += `<span class="innerdata flex flex-wrap" id="span${val}">${c} ${arr} ${g}=${document.getElementById('answer').value}/${evaluation}</span>`
                document.getElementById(`span${val}`).style.color = 'red';
                val += 1;
            } else {
                // document.getElementById('answer').value=``;
                document.getElementById('yourAnswer').innerHTML += `<span class="innerdata flex flex-wrap">${c} ${arr} ${g}=${document.getElementById('answer').value}/${evaluation}</span>`
            }
            randomOperator();
            a = 0;
            b = 1000;
            c = Math.round(b - (b - a) * Math.random());
            g = Math.round(b - (b - a) * Math.random());
            document.getElementById('question').innerText = `${c} ${arr} ${g}`;
            evaluation = eval(c + arr + g);
            document.getElementById("answer").select();
            setTimeout(() => {
                document.getElementById('question').innerText = `${c} ${arr} ${g} = ${evaluation}`;
            }, 60000);
        }
    })
}
questionChecker();