document.getElementById("time").select();
index = 1;
const addRow = () => {
    document.getElementById("maindos").innerHTML += `<tr>
    <td>${document.getElementById("time").value}</td>
    <td>${document.getElementById("description").value}</td>
    </tr>`;
    index++;
    setTimeout(() => {
        document.getElementById("time").select();
        document.getElementById("time").value = "";
        document.getElementById("description").value = "";
    }, 4);
}
const CheckRow = () => {
    document.getElementById("Check").innerHTML = `<tr>
    <td>${document.getElementById("time").value}</td>
    <td>${document.getElementById("description").value}</td>
    </tr>`;
}

const printer = () => {
    // document.getElementById(`marginBottom${val}`).style.marginBottom = '154px';
        document.getElementById('data').style.display = 'none';
        document.getElementById('Check').style.display = 'none';

        setTimeout(() => {
            window.print()
        }, 10);

        setTimeout(() => {
            // document.getElementById(`marginBottom${val}`).style.marginBottom = '4px';
        document.getElementById('data').style.display = 'flex';
        document.getElementById('Check').style.display = 'table';

    }, 20);
}

document.getElementById('print').addEventListener('click', () => {
    printer();
})
document.getElementById("submit").addEventListener("click", () => {
    CheckRow();
    addRow();
});
window.addEventListener('keydown', (event) => {
    key = event.key
    if (key == "Enter") {
        CheckRow();
        addRow();
    }else if (key=="Alt") {
            printer();
    }
})
