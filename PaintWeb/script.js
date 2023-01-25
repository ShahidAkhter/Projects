let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
canvas.addEventListener('click',()=>{
    ctx.fillRect(0, 0, 150, 75);
})
