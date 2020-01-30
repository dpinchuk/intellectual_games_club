import login from '../../pages/login.page';

describe('Login-form', () => {

    it('Username-field-displayed', () => {
        login.openBase();
        login.usernameDisplayed();
    });

    it('Password-field-displayed', () => {
        login.passField();
    });

    it('Login-button-displayed', () => {
        login.loginBtn();
    });

    it('Remind-Password-button-displayed', () => {
        login.remindPassBtn();
    });

    it('User-placeholder-correct', () => {
        login.userPlaceholder();
    });

    it('Password-placeholder-correct', () => {
        login.passPlaceholder();
    });

    it('Login-button-background-color', () => {
        login.loginBtnBgc();
    });

    it('Login-button-text', () => {
        login.loginBtnText();
    });

    it('Login-button-text-color', () => {
        login.loginBtnTextColor();
    });

    it('Remind-button-background-color', () => {
        login.remindPassBtnBgc();
    });

    it('Remind-button-text', () => {
        login.remindBtnText();
    });

    it('Remind-button-text-color', () => {
        login.remindBtnTextColor();
    });

});