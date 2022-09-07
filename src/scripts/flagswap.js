let flags = document.querySelectorAll(".flag");

flags.forEach(flag => {
    flag.addEventListener("click", () =>
        document.body.classList.replace(document.body.classList[0], flag.classList[0])
    );
});
