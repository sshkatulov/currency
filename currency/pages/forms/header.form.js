import Form from '../../../framework/elements/form';

class HeaderForm extends Form {
    
    get loginBtn() { return $('//*[contains(@class,"loginBtn")]'); }

    clickLogin() {
        this.loginBtn.click();
    }

}

export default new HeaderForm();