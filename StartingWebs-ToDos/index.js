document.getElementById("fajr").select();
index = 1;
const addRow = () => {
    document.getElementById("maindos").innerHTML += `<tr>
    <td>${index}</td>
    <td>${document.getElementById("fajr").value}</td>
    <td>${document.getElementById("sunRise").value}</td>
    <td>${document.getElementById("juhr").value}</td>
    <td>${document.getElementById("asr").value}</td>
    <td>${document.getElementById("magrib").value}</td>
    <td>${document.getElementById("isha").value}</td>
    </tr>`;
    index++;
    setTimeout(() => {
        document.getElementById("fajr").select();
        document.getElementById("fajr").value = "";
        document.getElementById("sunRise").value = "";
        document.getElementById("juhr").value = "";
        document.getElementById("asr").value = "";
        document.getElementById("magrib").value = "";
        document.getElementById("isha").value = "";
    }, 4);
}
const CheckRow = () => {
    document.getElementById("Check").innerHTML = `<tr>
    <td>${index}</td>
    <td>${document.getElementById("fajr").value}</td>
    <td>${document.getElementById("sunRise").value}</td>
    <td>${document.getElementById("juhr").value}</td>
    <td>${document.getElementById("asr").value}</td>
    <td>${document.getElementById("magrib").value}</td>
    <td>${document.getElementById("isha").value}</td>
    </tr>`;
}
document.getElementById("submit").addEventListener("click", () => {
    CheckRow();
    addRow();
});
window.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        CheckRow();
        addRow();
    }
})