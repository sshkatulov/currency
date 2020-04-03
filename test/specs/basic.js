import HomePage from '../../currency/pages/home.page.js';
import PlatformPage from '../../currency/pages/platform.page.js';
import TestUser from '../testData/testUser';

describe('check currency.com', () => {
    it('"Switch to live" button is visible', () => {
        HomePage.open();
        HomePage.headerForm.clickLogin();
        HomePage.loginForm.login(TestUser.Email, TestUser.Password);
        PlatformPage.waitForLoaded();
        PlatformPage.switchToDemo();
        expect(PlatformPage.isSwitchToLiveVisible()).toBe(true);
    });
});