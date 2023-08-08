import { LVL_PAGE, GAME_PAGE } from "./pages.js"
import { renderLevelPageComponent } from "./components/lvl-page-component.js"
import { renderGamePageComponent } from "./components/game-page-component.js"
import { compareCards } from "./compareCards.js"

const appEl = document.getElementById("app")
let page = LVL_PAGE
const renderApp = () => {
    if (page === LVL_PAGE) {
        return renderLevelPageComponent({ appEl })
    }
}

renderApp()

const suits = ["clubs", "diamonds", "hearts", "spades"]
const ranks = [
    "ace",
    "king",
    "queen",
    "jack",
    "ten",
    "nine",
    "eight",
    "seven",
    "six",
]

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
    let cardsSet = []

    // заполняем массив парами карт
    for (let i = 0; i < cardsQuantity; i++) {
        const randomSuit = Math.floor(Math.random() * 4)
        const randomRank = Math.floor(Math.random() * 9)

        const firstEl =
            "../static/img/" +
            ranks[randomRank] +
            "_" +
            suits[randomSuit] +
            ".jpg"
        const secondEl =
            "../static/img/" +
            ranks[randomRank] +
            "_" +
            suits[randomSuit] +
            ".jpg"
        cardsSet.push(firstEl, secondEl)
    }

    shuffle(cardsSet)
    shuffle(cardsSet)
    shuffle(cardsSet)
    shuffle(cardsSet)
    shuffle(cardsSet)

    // перемешиваем массив
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    const gameField = document.querySelector(".game-field")
    for (let i = 0; i < cardsSet.length; i++) {
        const elem = document.createElement("img")
        elem.src = cardsSet[i]
        elem.classList.add("card")
        gameField.appendChild(elem)
    }
    const cards = gameField.querySelectorAll(".card")
    // скрываем карты через 5сек
    function hideCards() {
        cards.forEach((card) => {
            card.src = "../static/img/backCards.jpg"
        })
    }

    setTimeout(hideCards, 5000)

    compareCards(cards, cardsSet)
})

const renderGamePage = (Quantity) => {
    const appDiv = document.createElement("div")
    appDiv.setAttribute("id", "app")
    pageContainer.appendChild(appDiv)
    renderGamePageComponent({ appDiv })
    console.log(Quantity)
}
