import Page from '../../framework/elements/page';

class HomePage extends Page {
    
    get pageLocator() { return $('//*[@main]'); }
    get accountBtn() { return $('//*[@account]'); }
    get accountTypeLbl() { return $('//*[@class="account"]'); }
    get switchToDemoBtn() { return $('//*[*[text()="Switch to Demo"]]'); }
    get switchToLiveBtn() { return $('//*[text()="Switch to live"]'); }
    get availableBalanceLbl() { return $('//*[*[*[text()="Available"]]]//*[contains(@class,"price")]'); }

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

    getAvailableBalance() {
        return this.availableBalanceLbl.getText().replace(/\r?\n|\r/, "");
    }

}

export default new HomePage();