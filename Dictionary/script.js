document.getElementById('api0').classList.add('active')
document.getElementById('results0').innerHTML = 'Search word to see the meaning here...';
document.getElementById('results1').innerHTML = 'Search word to see the meaning here...';
document.getElementById('results0').style.display = 'block';
document.getElementById('results1').style.display = 'none';
document.getElementById('api0').classList.add('active')

document.getElementById('wordInput').select();
document.getElementById('api0').addEventListener('click', () => {
    if (document.getElementById('results0').style.display == 'none') {
        document.getElementById('results0').style.display = 'block';
        document.getElementById('results1').style.display = 'none';
        document.getElementById('api1').classList.remove('active')
        document.getElementById('api0').classList.add('active')
    }
})
document.getElementById('api1').addEventListener('click', () => {
    if (document.getElementById('results1').style.display == 'none') {
        document.getElementById('results1').style.display = 'block';
        document.getElementById('results0').style.display = 'none';
        document.getElementById('api0').classList.remove('active')
        document.getElementById('api1').classList.add('active')
    }
})

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'API_KEY',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
};
// const manupulate=()=>{
//     p=response.slice('\.').length;
//     console.log(p)
// }

const options0 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'API_KEY',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
};
const myWord0 = async (word) => {
    document.getElementById('results0').innerHTML = '<h3>Searching...</h3>';
    fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + word, options0)
        .then(response => response.json())
        .then(response => {
            html = ''
            // console.log(response)
            if (response.list.length !== 0) {
                for (let i = 0; i < response.list.length; i++) {
                    html += `
                    <div class="border p-2 m-2">
                    <div id="definitions" class="my-2"><h5>Defination:</h5>${response.list[i].definition ? response.list[i].definition : ""}</div>
                    <div id="definitions" class="my-2"><h5>Example:</h5>${response.list[i].example ? response.list[i].example : ""}</div></div>`
                }
            } else {
                html = '<div class="p-2 pt-0">Not able to get this word...</div>';
            }
            // console.log(html)
            document.getElementById('results0').innerHTML = `<h2 class="mx-2">${word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase()}</h2>
            <div class="my-4">
            <div>${html}</div>
            </div>`
        })
        .catch(err => console.log(err));
    }
const myWord = async (word) => {
    document.getElementById('results1').innerHTML = '<h3>Searching...</h3>';
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
    .then(response => response.json())
    .then(response => {
        document.getElementById('results1').innerHTML = `
        <h2 class="mx-2">${word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase()}</h2>
        <div id="definitions" class="border p-2 m-2">${!response.definition ? 'Not able to get this word...' : response.definition}</div>`
    })
    .catch(err => console.error(err));
}
const handleSubmit=async()=>{
    if (document.getElementById('wordInput').value) {
        p0 = await myWord0(document.getElementById('wordInput').value)
        p1 = await myWord(document.getElementById('wordInput').value)
        document.getElementById('wordInput').value=``
    }
}
document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();
    document.getElementById('results0').innerHTML = '';
    document.getElementById('results1').innerHTML = '';
    handleSubmit()
    
})
document.body.addEventListener('keydown', async (e) => {
    if (e.value == 'Enter') {
        document.getElementById('results0').innerHTML = '';
        document.getElementById('results1').innerHTML = '';
        handleSubmit()
    }
    
})
