export default class Page {
    constructor() {
    }

    open(path) {
        browser.url(path)
    }

    waitForLoaded(pageLocator) {
        browser.waitUntil(() => pageLocator.isDisplayed());
    }
}