const e = document.querySelector("body");


e.addEventListener('keydown', (e) => {

    switch (e.key) {
        case 'ArrowLeft':
            document.getElementById("prev").click();
            break;
        case 'ArrowRight':
        case ' ':
            document.getElementById("next").click();
            break;
    }
});