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

document.getElementById("aside_toggle").addEventListener("click", () => {
    const expandable = document.getElementById("aside_expandable")
    if (expandable.style.display === "block") {
        expandable.style.display = "none"
    } else {
        expandable.style.display = "block"
    }
})