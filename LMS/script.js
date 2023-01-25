console.log('Hello World');
// Show the no. on pages and on which page you are of the book
const entirecode = () => {

    let d = 0;
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
    document.getElementById('imgMain').style.height = "700px"
    document.getElementById("slideNo").innerText = `${d + 1}/${imgarr.length}`;


    // Move to forward
    const forwarding = () => {
        if (document.getElementById('searchpage').value) {
            d = (parseInt(document.getElementById('searchpage').value) - 1);
            // d+=d;
        }
        if (d == (imgarr.length - 1)) {
            d = (imgarr.length - 1);
        } else {
            d++;
        }

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
    }




    // Move to backward
    const backwarding = () => {
        if (document.getElementById('searchpage').value) {
            d = (parseInt(document.getElementById('searchpage').value) - 1);
            // d+=d;
        }
        if (d == 0) {
            d = 0;
        } else {
            d--;
        }

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
    }
    document.getElementById('forward').addEventListener('click', () => {
        forwarding();
        setTimeout(() => {
            document.getElementById('searchpage').value = "";
        }, 100);
    })
    document.getElementById('backward').addEventListener('click', () => {
        backwarding();
        setTimeout(() => {
            document.getElementById('searchpage').value = "";
        }, 100);
    })



    // Zoom In and Zoom Out
    currentHeight = 759;
    if (currentHeight == 759) {
        currentHeight = 759;
    } else if (currentHeights == currentHeight) {
        currentHeight = currentHeights;
    }
    document.getElementById('ZoomOut').addEventListener('click', () => {
        document.getElementById('imgMain').style.height = (currentHeight - 100) + "px";
        currentHeight = currentHeight - 100
        currentHeights = currentHeight
    })
    document.getElementById('ZoomIn').addEventListener('click', () => {
        document.getElementById('imgMain').style.height = (currentHeight + 100) + "px";
        currentHeight = currentHeight + 100
        currentHeights = currentHeight
    })

    // if (document.getElementById('imgMain').style.height == "759px") {
    // } else if(document.getElementById('imgMain').style.height == "2000px"){
    // }


    if (!imgarr[d]) {
        document.getElementById("imgMain").src = 'Images/LMSimg.jpg';
        document.getElementById("slideNo").innerText = `1/1`;
        // document.body.style.background = 'url(Images/LMSbg.jpg)'
        // document.body.style.backgroundSize = 'cover';
    }
    document.getElementById('backward').addEventListener('click', () => {
        if (imgarr.length == 0) {
            document.getElementById("slideNo").innerText = `1/1`;
            document.getElementById("imgMain").src = "Images/LMSimg.jpg";
            document.getElementById("forward").value = `>>`;
            // searchers();
        }
    })
    document.getElementById('forward').addEventListener('click', () => {
        if (imgarr.length == 0) {
            document.getElementById("slideNo").innerText = `1/1`;
            document.getElementById("imgMain").src = "Images/LMSimg.jpg";
            document.getElementById("backward").value = `<<`;
            // searchers();
        }
    })


    // KeyboardEvents
    window.addEventListener('keydown', (event) => {
        if (event.key == "ArrowRight") {
            forwarding()
            setTimeout(() => {
                document.getElementById('searchpage').value = "";
            }, 100);
        }
        else if (event.key == "ArrowLeft") {
            backwarding();
            setTimeout(() => {
                document.getElementById('searchpage').value = "";
            }, 100);
        }
    })
}
entirecode();



// Change height after clicking on the imange/Learning content
const ChangeSize = () => {
    if (document.getElementById('imgMain').style.height === "700px") {
        document.getElementById('imgMain').style.height = "2000px";
        currentHeight = 2000;
        // Adding curson type in the learning content zoomOut
        document.getElementById('imgMain').style.cursor = 'zoom-in';
        setTimeout(() => {
            document.getElementById('imgMain').style.cursor = 'default';
        }, 1000);

    } else {
        document.getElementById('imgMain').style.height = "700px";
        currentHeight = 700;
        // Adding curson type in the learning content zoomIn
        document.getElementById('imgMain').style.cursor = 'zoom-out';
        setTimeout(() => {
            document.getElementById('imgMain').style.cursor = 'default';
        }, 1000);
    }
}
document.getElementById('imgMain').addEventListener('click', () => {
    ChangeSize();
})


// KeyboardEvent
window.addEventListener('keydown', (event) => {
    if (event.code == "Space") {
        document.body.style.overflow = 'hidden';
        ChangeSize();
        setTimeout(() => {
            document.body.style.overflowY = 'auto';
        }, 100);
    }
})
// document.getElementById('imgMain').addEventListener('click', () => {
// })
document.getElementById('nav').style.display = 'none';
document.getElementById('displayer').addEventListener('click', () => {
    if (document.getElementById('nav').style.display == 'flex') {
        document.getElementById('nav').style.display = 'none';
    } else {
        document.getElementById('nav').style.display = 'flex';
    }
})
document.getElementById('nav').addEventListener('click', () => {
    // document.body.style.background = 'url(Images/LMSbg.jpg)'
    // document.body.style.backgroundSize = 'cover';
    document.getElementById('nav').style.display = 'none';
})
document.getElementById('osdev').addEventListener('click', () => {
    entirecode();
})
document.getElementById('rocketScience').addEventListener('click', () => {
    entirecode();
})
// document.getElementById('osdevPDF').addEventListener('click', () => {
//     entirecode();
// })

const scrollToTopButton = () => {
    window.onscroll = function () { scrollTopFunction() };
}
const scrollTopFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 300) {
        document.getElementById('moveToTop').style.display = "flex";
    } else {
        document.getElementById('moveToTop').style.display = "none";
    }
}
scrollToTopButton();
document.getElementById('moveToTop').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
