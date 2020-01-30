import header from '../../pages/header.page';

describe('Header', () => {

    it('Header-displayed', function () {
      header.openForgot();
      header.headerLocation();
    });

    it('Header-background-color', () => {
      header.headerBgColor();
    });

    it('Header-has-two-button', () => {
      header.headerHasTwoBtn();
    });

    it('Login-button-text', () => {
      header.loginBtnText();
    })
  ;
    it('Login-button-background-color', () => {
      header.loginBtnBgColor();
    });

    it('Login-button-text-color', () => {
      header.loginBtnTextColor();
    });

    it('Login-button-font-size', () => {
      header.loginBtnFontSize();
    });

    it('Login-button-font-family', () => {
      header.loginBtnFont();
    });
    it('Login-button-alignment', () => {
      header.loginBtnAlign();
    });

    it('Login-button-redirect', () => {
      header.loginClickRedirect()
    });

    it('Login-button-not-exist', () => {
      header.loginBtnNotExist();
    });

    it('AllPlayer-button-alignment', () => {
      header.allPlayerBtnAlign()
    });

    it('AllPlayer-button-text', () => {
      header.allPlayersBtnText();
    });

    it('AllPlayer-button-background-color', () => {
      header.allPlayerBtnBgColor();
    });

    it('AllPlayer-button-text-color', () => {
      header.allPlayersBtnTextColor();
    });

    it('AllPlayer-button-font-size', () => {
      header.allPlayersBtnFontSize();
    });

    it('AllPlayer-button-font-family', () => {
      header.allPlayersBtnFont();
    });

    it('AllPlayer-button-redirect', () => {
      header.allPlayersBtnRedirect()
    });

});