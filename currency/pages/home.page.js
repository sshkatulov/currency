import Page from '../../framework/elements/page';
import HeaderForm from './forms/header.form';
import LoginForm from './forms/login.form';

class HomePage extends Page {
    
    get headerForm() { return HeaderForm; }
    get loginForm() { return LoginForm; }

    open() {
        super.open('');
    }

}

export default new HomePage();