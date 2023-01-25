tag = document.getElementById('tag').value;
ids = document.getElementById('id').value;
classed = document.getElementById('class').value;
type = document.getElementById('type').value;
genHTML = document.getElementById('genratedHTML')
document.getElementById('addHTML').addEventListener('click', () => {
    if (document.getElementById('genratedHTML').innerText == `Generated html displays here!`) {
        document.getElementById('genratedHTML').innerText = `<${document.getElementById('tag').value} type='${document.getElementById('type').value}' id='${document.getElementById('id').value}' class='${document.getElementById('class').value}'>`
    }else{
        document.getElementById('genratedHTML').innerText += `<${document.getElementById('tag').value} type='${document.getElementById('type').value}' id='${document.getElementById('id').value}' class='${document.getElementById('class').value}'>`
    }
    document.getElementById('genratedHTML').innerHTML += `<${document.getElementById('tag').value} type='${document.getElementById('type').value}' id='${document.getElementById('id').value}' class='${document.getElementById('class').value}'>`
    document.getElementById('genratedHTML').innerHTML+=`<br>`

})