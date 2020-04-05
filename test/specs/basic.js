/* global browser, describe, beforeAll, it, expect */
import HomePage from '../../pages/home.page';
import PlatformPage from '../../pages/platform.page';
import TestUser from '../testData/testUser';
import { removeHttpProtocol } from '../../utils/stringUtils';

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

  it('logo is present', () => {
    expect(PlatformPage.isLogoPresent()).toBe(true);
  });

  it('logo redirects to home page', () => {
    PlatformPage.clickLogo();
    const url = removeHttpProtocol(browser.getUrl());
    expect(url).toBe('exchange.currency.com');
  });
});
