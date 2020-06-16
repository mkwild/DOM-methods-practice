const bodyElement = document.querySelector("body")
const buttonElement = document.createElement("button")
bodyElement.append(buttonElement)
buttonElement.append("button")

const mainElement = document.createElement("main")
bodyElement.append(mainElement)

const imageElement = document.createElement("img")
imageElement.className = "image"
imageElement.src = "https://static01.nyt.com/images/2016/05/29/us/30xp-gorilla/30xp-gorilla-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
imageElement.alt = "King Harambe"
mainElement.append(imageElement)

const linkElement = document.createElement("a")
linkElement.className = "link"
linkElement.href = "https://knowyourmeme.com/memes/harambe-the-gorilla"
linkElement.target = "_blank"
linkElement.referrerPolicy = "no-referrer"
linkElement.append("Harambe")
mainElement.append(linkElement)

buttonElement.addEventListener("click", function() {
    mainElement.remove()
})

const input = document.createElement("input")
input.id = "input"
input.type = "text"
input.placeholder = "css selector"
bodyElement.append(input)
const buttonElement2 = document.createElement("button")
buttonElement2.className = "button2"
buttonElement2.append("button 2")
bodyElement.append(buttonElement2)

buttonElement2.addEventListener("click", function () {
    const inputValue = document.getElementById("input").value
    const removedElement = document.querySelector(inputValue)
    removedElement.remove()
})

const textInput = document.createElement("input")
textInput.id = "textInput"
textInput.type = "text"
textInput.placeholder = "text input"
bodyElement.append(textInput)
const buttonElement3 = document.createElement("button")
buttonElement3.className = "button3"
buttonElement3.append("button 3")
bodyElement.append(buttonElement3)

buttonElement3.addEventListener("click", function() {
    const textInputValue = document.getElementById("textInput").value
    const addedElement = document.createElement("p")
    bodyElement.append(addedElement)
    addedElement.append(textInputValue)
})