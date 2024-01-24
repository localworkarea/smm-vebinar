// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// import SplitType from 'split-type'

const splitTextElements = document.querySelectorAll('.split-text');

if (splitTextElements.length > 0) {
  const splitText = new SplitType('.split-text', { types: 'lines' });

  window.addEventListener("resize", function() {
    splitText.split();
  });
}
