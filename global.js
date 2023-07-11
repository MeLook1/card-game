import { LVL_PAGE } from "./pages.js";
import { renderLevelPageComponent } from "./components/lvl-page-component.js";

let page = LVL_PAGE;
const renderApp = () => {
    const appEl = document.getElementById("app");
    if (page === LVL_PAGE) {
        return renderLevelPageComponent({ appEl });
    }
};
renderApp();