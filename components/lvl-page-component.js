export function renderLevelPageComponent({ appEl }) {
    const appHtml = `
                    <div class="page-container">
                    <div class="lvl-box"> 
                    <div class="lvl-box-title">Выбери сложность</div> 
                    <div class="lvl-box-numbers">
                    <button class="lvl-number">1</button>
                    <button class="lvl-number">2</button>
                    <button class="lvl-number">3</button>
                    </div>
                    <button class="start-button">Старт</button>
                    </div>
                    </div>
                    `;

    appEl.innerHTML = appHtml;
}
