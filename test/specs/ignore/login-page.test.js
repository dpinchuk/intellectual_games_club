import login from '../../pages/login.page';

describe('Login-page', () => {

    it('Page-displayed', () => {
        login.openBase();
    });

    it('Logo-displayed', () => {
        login.logoDisplayed();
    });

    it('Form-displayed', () => {
        login.formDisplayed();
    });

    it('Reminder-text-displayed', () => {
        login.reminderTxtDisplayed();
    });

    it('Logo-is-center-aligned', () => {
        login.logoAlignment();
    });

    it('Logo-height', () => {
        login.logoHeight();
    });

    it('Error-empty', () => {
        login.errorEmpty();
    });

    it('Error-aligned', () => {
        login.errorAlign();
    });

    it('Error-located', () => {
        login.errorLocated();
    });

    it('Error-size', () => {
        login.errorSize();
    });

    it('Error-font-family', () => {
        login.errorFont();
    });

    it('Username-field-max-100-length', () => {
        login.usernameMaxField();
    });

    it('Password-field-max-100-length', () => {
        login.passMaxField();
    });

    it('Username-does-NOT-exist', () => {
        login.userNotExistDisplayed();
    });

    it('Username-does-NOT-exist-text', () => {
        login.userNotExistText();
    });

    it('Username-does-NOT-exist-color', () => {
        login.userNotExistColor();
    });

    it('Password-is-incorrect', () => {
        login.passIncorrect();
    });

    it('Password-is-incorrect-text', () => {
        login.passIncorrectText();
    });

    it('Username-does-NOT-exist-color', () => {
        login.passIncorrectColor();
    });

    it('Error-text-disappears-if-makes-change-in-username', () => {
        login.usernameChange();
    });

    it('Error-text-disappears-if-makes-change-in-password', () => {
        login.passChange();
    });

});