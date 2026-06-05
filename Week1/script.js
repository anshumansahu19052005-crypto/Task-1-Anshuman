const buttons = document.querySelectorAll("nav button");

buttons[0].addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

buttons[1].addEventListener("click", () => {
    document.querySelectorAll("section")[2].scrollIntoView({
        behavior: "smooth"
    });
});

buttons[2].addEventListener("click", () => {
    document.querySelectorAll("section")[3].scrollIntoView({
        behavior: "smooth"
    });
});

buttons[3].addEventListener("click", () => {
    document.querySelectorAll("section")[4].scrollIntoView({
        behavior: "smooth"
    });
});