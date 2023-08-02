import { LVL_PAGE, GAME_PAGE } from "./pages.js"
import { renderLevelPageComponent } from "./components/lvl-page-component.js"
import { renderGamePageComponent } from "./components/game-page-component.js"

const appEl = document.getElementById("app")
let page = LVL_PAGE
const renderApp = () => {
    if (page === LVL_PAGE) {
        return renderLevelPageComponent({ appEl })
    }
}

renderApp()

const radios = document.querySelectorAll("input")
const startButton = document.querySelector(".start-button")
const pageContainer = document.querySelector(".page-container")
startButton.addEventListener("click", () => {
    let lvlSelected = 0
    for (const radio of radios) {
        if (radio.checked === true) {
            lvlSelected = radio.value
        }
    }
    let cardsQuantity = 0
    if (lvlSelected === "1") {
        cardsQuantity = 3
    } else if (lvlSelected === "2") {
        cardsQuantity = 6
    } else if (lvlSelected === "3") {
        cardsQuantity = 9
    }
    page = GAME_PAGE
    appEl.innerHTML = ""
    console.log("нажал" + " " + lvlSelected)
    renderGamePage(cardsQuantity)
    const hideCards = () => {
        const gameField = document.querySelector(".game-field")
        console.log(gameField)
        const cards = gameField.querySelectorAll("div")
        console.log(cards)
        for (let i = 0; i < cards.length; i++) {
            cards[i].className = ""
            cards[i].classList.add("back")
        }
    }
    setTimeout(hideCards, 5000)
})

const renderGamePage = (Quantity) => {
    const appDiv = document.createElement("div")
    appDiv.setAttribute("id", "app")
    pageContainer.appendChild(appDiv)
    renderGamePageComponent({ appDiv })
    console.log(Quantity)
}
