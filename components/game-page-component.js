export function renderGamePageComponent({ appEl }) {
    appEl = document.getElementById("app")
    const appHtml = `
                    <div class="game-page-container">
                        <div class="header">
                        <div class="timer">
                            <div class="time-measure">
                                <div class="min">
                                    <p>min</p>
                                </div>
                                <div class="sec">
                                    <p>sec</p>
                                </div>
                            </div>
                            <div class="time">
                                <p>00.00</p>
                            </div>
                        </div>
                        <button class="start-game-button">Начать заново</button>
                        </div>
                        <div class="game-field">
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                            <div class="back"></div>
                        </div>
                    </div>
                    `

    appEl.innerHTML = appHtml
}
