let flags = document.querySelectorAll(".svg-image");

//console.log(flags);

flags.forEach(flag => {
    console.log(flag);
    flag.onclick = () => {
        console.log("test");

    };
});

function changeBackground(filename) {
    if (!filename.trim()) return;

    document.body.style.backgroundImage = "url('/assets/pride-flags/flags/svg/" + filename.trim() + ".svg')";
}