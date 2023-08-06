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
                            
                        </div>
                    </div>
                    `

    appEl.innerHTML = appHtml
}
                            // <div class="ace-spades"></div>
                            // <div class="king-spades"></div>
                            // <div class="queen-spades"></div>
                            // <div class="jack-spades"></div>
                            // <div class="ten-spades"></div>
                            // <div class="nine-spades"></div>
                            // <div class="eight-spades"></div>
                            // <div class="seven-spades"></div>
                            // <div class="six-spades"></div>
                            // <div class="ace-hearts"></div>
                            // <div class="king-hearts"></div>
                            // <div class="queen-hearts"></div>
                            // <div class="jack-hearts"></div>
                            // <div class="ten-hearts"></div>
                            // <div class="nine-hearts"></div>
                            // <div class="eight-hearts"></div>
                            // <div class="seven-hearts"></div>
                            // <div class="six-hearts"></div>
                            // <div class="ace-diamonds"></div>
                            // <div class="king-diamonds"></div>
                            // <div class="queen-diamonds"></div>
                            // <div class="jack-diamonds"></div>
                            // <div class="ten-diamonds"></div>
                            // <div class="nine-diamonds"></div>
                            // <div class="eight-diamonds"></div>
                            // <div class="seven-diamonds"></div>
                            // <div class="six-diamonds"></div>
                            // <div class="ace-clubs"></div>
                            // <div class="king-clubs"></div>
                            // <div class="queen-clubs"></div>
                            // <div class="jack-clubs"></div>
                            // <div class="ten-clubs"></div>
                            // <div class="nine-clubs"></div>
                            // <div class="eight-clubs"></div>
                            // <div class="seven-clubs"></div>
                            // <div class="six-clubs"></div>