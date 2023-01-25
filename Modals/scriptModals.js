document.getElementById('btnalert').addEventListener('click', () => {
    if (document.getElementById('modals').style.display != "none") {
        document.getElementById('modals').style.display = "none";
    }
});
window.addEventListener('keydown', (event) => {
    if (event.code == 'Semicolon') {
        if (document.getElementById('modals').style.display != "none") {
                document.getElementById('modals').style.display = "none";
        }
    }else if (event.code == 'Enter') {
        if (document.getElementById('modals').style.display != "none") {
                document.getElementById('modals').style.display = "none";
        }
    }else if (event.code == 'Space') {
        if (document.getElementById('modals').style.display != "none") {
                document.getElementById('modals').style.display = "none";
        }
    }

});