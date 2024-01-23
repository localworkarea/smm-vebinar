// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const splitText = new SplitType('.split-text', { types: 'lines'});
window.addEventListener("resize", function() {
  splitText.split();
});