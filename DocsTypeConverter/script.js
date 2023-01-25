const printer = () => {
    document.getElementById('print').addEventListener('click', () => {
        window.print()
    })
}
printer();