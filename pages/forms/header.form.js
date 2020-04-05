/* global $ */
class HeaderForm {
  get loginBtn() { return $('//*[contains(@class,"loginBtn")]'); }

  clickLogin() {
    this.loginBtn.click();
  }
}

export default new HeaderForm();
