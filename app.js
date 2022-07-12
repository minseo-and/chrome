const h1 = document.querySelector(".hello hi")

function handleTitleClick() {
    const currentColor = h1.style.color
    let newColor
    if(currentColor === "blue"){
        newColor= "tomato"
    } else {
        newColor = "blue"
    }
    h1.style.color = newColor
}

function handleWindowResize() {
    const currentColor2 = document.body.style.backgroundColor
    let newColor2
    if(currentColor2 === "blue"){
        newColor2= "tomato"
    } else {
        newColor2 = "blue"
    }
    document.body.style.backgroundColor = newColor2
}
h1.addEventListener("click", handleTitleClick)

window.addEventListener("resize", handleWindowResize)