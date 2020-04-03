export const switchToWindowByPattern = ((pattern) => {
    browser.pause(1000);
    browser.switchWindow(pattern);
});