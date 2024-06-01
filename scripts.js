const buttonsOriginal = document.getElementsByClassName("desc_button")
let buttons = Array.from(buttonsOriginal)
buttons.forEach((button) => {button.addEventListener("click", () => {
    const desc = button.parentElement.parentElement.lastElementChild
    if (desc.style.display === "block") {
        desc.style.display = "none"
    } else {
        desc.style.display = "block"
    }
})})