/* global browser */
const defaultPause = 1000;

export const switchToWindowByPattern = ((pattern) => {
  browser.pause(defaultPause);
  browser.switchWindow(pattern);
});
