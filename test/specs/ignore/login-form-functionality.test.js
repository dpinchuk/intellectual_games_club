import login from '../../pages/login.page';

describe('Login-page', () => {

  it('Error-empty', () => {
    login.openBase();
    login.errorEmpty();
  });

  it('Error-pass-empty', () => {
    login.errorPassEmpty();
  });
  
  it('Error-username-empty', () => {
    login.errorUsernameEmpty();
  });

  it('Error-aligned', () => {
    login.errorAlign();
  });

  it('Error-color', () => {
    login.errorColor();
  });

  it('Error-location', () => {
    login.errorLocated();
  });

  it('Error-font-size', () => {
    login.errorSize();
  });

  it('Error-font-family', () => {
    login.errorFont();
  });

  it('Username-field-min-length', () => {
    login.usernameMinField();
  });

  it('Password-field-min-length', () => {
    login.passMinField();
  });

  it('Username-field-max-length', () => {
    login.usernameMaxField();
  });

  it('Password-field-max-length', () => {
    login.passMaxField();
  });

  it('Username-field-over-length', () => {
    login.usernameOverField();
  });

  it('Password-field-over-length', () => {
    login.passOverField();
  });

  it('Password-field-copy-past-off', () => {
    login.copyPastOff();
  });

  it('Username-does-not-exist', () => {
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

  it('Password-is-incorrect-color', () => {
    login.passIncorrectColor();
  });

  it('Error-text-disappears-if-makes-change-in-username', () => {
    login.usernameChange();
  });

  it('Error-text-disappears-if-makes-change-in-password', () => {
    login.passChange();
  });

  it('Remind-password-opener', () => {
    login.remindBtnFunc();
  });

  it('Response-spinner', () => {
    login.responseSpinner();
  });

  it('Correct-user-and-password', () => {
    login.moderLogin();
  });

});