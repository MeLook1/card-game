export function renderGamePageComponent({ appEl }) {
    appEl = document.getElementById("app");
    const appHtml = `
                    <div class="page-container">
                        <div class="timer">
                            <div class="min">
                                <p>min</p>
                                <p>00</p>
                            </div>
                            <div class="sec">
                                <p>sec</p>
                                <p>00</p>
                            </div>
                        </div>
                        <button class="start-game-button">Начать заново</button>
                    </div>
                    `;

    appEl.innerHTML = appHtml;
}