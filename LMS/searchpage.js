const searcher = () => {
    d = (parseInt(document.getElementById('searchpage').value) - 1);
    // console.log(d)
    if (d <= 0) {
        document.getElementById("backward").value = `<<`;
    } else {
        document.getElementById("backward").value = `<${d}`;
    }
    if (d >= (imgarr.length - 1)) {
        document.getElementById("forward").value = `>>`;
    } else {
        document.getElementById("forward").value = `${d + 2}>`;
    }
    document.getElementById("imgMain").src = imgarr[d];
    document.getElementById("slideNo").innerText = `${d + 1}/${imgarr.length}`;
    d = (parseInt(document.getElementById('searchpage').value) - 1);
}

const searchers = () => {
    // let parseIntsearch=Number.parseInt(document.getElementById('searchpage').value);
    if ((Number.parseInt(document.getElementById('searchpage').value) > imgarr.length) ||
        (Number.parseInt(document.getElementById('searchpage').value) < 1) ||
        (document.getElementById('searchpage').value == '') ||
        Number.parseInt(document.getElementById('searchpage').value) == 'NaN' ||
        document.getElementById("imgMain").src == "Images/LMSimg.jpg") {

        alert("Page Not Found");
        document.getElementById('searchpage').value = "";
    } else {
        searcher();
    }
}
document.getElementById('searchbutton').addEventListener('click', () => {
    searchers();
})
document.getElementById('searchpage').addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        searchers();
    }
})