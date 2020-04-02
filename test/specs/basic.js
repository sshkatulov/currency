import HomePage from '../../currency/pages/home.page.js';
import TestUser from '../testData/testUser';

describe('check currency.com', () => {
    it('"Switch to live" button is visible', () => {
        HomePage.open();
        HomePage.headerForm.clickLogin();
        HomePage.loginForm.login(TestUser.Email, TestUser.Password);

        const title = browser.getTitle();
        expect(title).toBe('The world\'s first regulated tokenized securities exchange | Currency.com');
    });
});