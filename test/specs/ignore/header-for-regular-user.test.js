import header from '../../pages/header.page';

describe('Header', () => {

    it('Welcome-text-instated-of-login-button', () => {
        header.openBase();
        header.testLogin();
        header.welcomeTextInstedLoginBtn();
    });

    it('Welcome-text-text', () => {
        header.welcomeTextText();
    });

    it('Welcome-text-font-size', () => {
        header.welcomeTextFontSize();
    });

    it('Welcome-text-font-color', () => {
        header.welcomeTextFontColor();
    });

    it('Welcome-constant-text-font-weight', () => {
        header.welcomeConstantTextWeight();
    });

    it('Welcome-text-nickname-font-weight', () => {
        header.nickNameTextWeight();
    });

    it('My-Account-button-alignment', () => {
        header.myAccountBtnAlign();
    });

    it('My-Account-button-is-exist', () => {
        header.myAccountBtnIsExist();
    });

    it('My-Account-button-text', () => {
        header.myAccountBtnText();
    });

    it('My-Account-button-background-color', () => {
        header.allPlayerBtnBgColor();
    });

    it('My-Account-button-text-color', () => {
        header.myAccountBtnTextColor();
    });

    it('My-Account-button-font-size', () => {
        header.myAccountBtnFontSize();
    });

    it('My-Account-button-font-family', () => {
        header.myAccountBtnFont();
    });

    it('My-Account-button-redirect', () => {
        header.myAccountBtnRedirect()
    });

    it('Logout-button-text', () => {
        header.logoutBtnText();
    });

    it('Logout-button-background-color', () => {
        header.logoutBtnBgColor();
    });

    it('Logout-button-text-color', () => {
        header.logoutBtnTextColor();
    });

    it('Logout-button-font-size', () => {
        header.logoutBtnFontSize();
    });

    it('Logout-button-font-family', () => {
        header.logoutBtnFont();
    });

    it('Logout-button-alignment', () => {
        header.logoutBtnAlign();
    });

    it('Logout-button-redirect', () => {
        header.logoutClickRedirect()
    });

});