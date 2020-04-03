import Page from '../../framework/elements/page';

class HomePage extends Page {
    
    get pageLocator() { return $('//*[@main]'); }
    get accountBtn() { return $('//*[@account]'); }
    get accountTypeLbl() { return $('//*[@class="account"]'); }
    get switchToDemoBtn() { return $('//*[*[text()="Switch to Demo"]]'); }
    get switchToLiveBtn() { return $('//*[text()="Switch to live"]'); }

    open() {
        super.open('trading/platform/');
    }

    waitForLoaded() {
        super.waitForLoaded(this.pageLocator);
    }

    switchToDemo() {
        this.accountBtn.click();
        this.switchToDemoBtn.click();
        browser.waitUntil(() => this.accountTypeLbl.getText() === 'Demo');
    }

    isSwitchToLiveVisible() {
        return this.switchToLiveBtn.isDisplayed();
    }

}

export default new HomePage();