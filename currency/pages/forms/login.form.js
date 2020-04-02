import Form from '../../../framework/elements/form';

class LoginForm extends Form {
    
    get emailInp() { return $('//input[@name="email"]'); }
    get passwordInp() { return $('//input[@name="password"]'); }
    get submitBtn() { return $('//button[@type="submit" and contains(@class,"l_btn")]'); }

    login(email, password) {
        this.emailInp.setValue(email);
        this.passwordInp.setValue(password);
        this.submitBtn.click();
    }

}

export default new LoginForm();