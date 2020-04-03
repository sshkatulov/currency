import HomePage from '../../currency/pages/home.page.js';
import PlatformPage from '../../currency/pages/platform.page.js';
import TestUser from '../testData/testUser';

describe('check currency.com', () => {
    beforeAll(() => {
        HomePage.open();
        HomePage.headerForm.clickLogin();
        HomePage.loginForm.login(TestUser.Email, TestUser.Password);
        PlatformPage.waitForLoaded();
        PlatformPage.switchToDemo();
    });

    it('"Switch to live" button is visible', () => {
        expect(PlatformPage.isSwitchToLiveVisible()).toBe(true);
    });
    
    it('available balance is correct', () => {
        expect(PlatformPage.getAvailableBalance()).toBe(TestUser.Balance);
    });
});