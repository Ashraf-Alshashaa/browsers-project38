'use strict';

import { START_QUIZ_BUTTON_ID, WELCOME_TITLE } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <img id = "welcome-img" src = "public/images/welcome-img.jpeg" alt="Netherlands flag"/>
    <h1 id = "${WELCOME_TITLE}" >Test your language</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start</button>
  `;
  return element;
};
