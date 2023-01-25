const buttonEngine = () => {
    document.getElementById('bold').addEventListener('click', () => {
        document.getElementById('mainContent').addEventListener('keydown', () => {
            document.getElementById(`word${wordNum}`).classList.add('bold');
        })
    })
    document.getElementById('italic').addEventListener('click', () => {
        document.getElementById('mainContent').addEventListener('keydown', () => {
            document.getElementById(`word${wordNum}`).classList.add('italic');
        })
    })
    document.getElementById('underline').addEventListener('click', () => {
        document.getElementById('mainContent').addEventListener('keydown', () => {
            document.getElementById(`word${wordNum}`).classList.add('underline');
        })
    })
}