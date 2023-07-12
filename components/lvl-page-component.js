export function renderLevelPageComponent({ appEl }) {
    const appHtml = `
                    <div class="page-container">
                    <div class="lvl-box"> 
                    <div class="lvl-box-title">Выбери сложность</div> 
                    <div class="lvl-box-numbers">
                    <input type="radio" id="radioButLvL1" value="LvL1" name="radioBtn">
                        <label for="radioButLvL1">1</label>
                    <input type="radio" id="radioButLvL2" value="LvL2" name="radioBtn">
                        <label for="radioButLvL2">2</label>
                    <input type="radio" id="radioButLvL3" value="LvL3" name="radioBtn">
                        <label for="radioButLvL3">3</label>
                    </div>
                    <button class="start-button">Старт</button>
                    </div>
                    </div>
                    `;

    appEl.innerHTML = appHtml;
}
