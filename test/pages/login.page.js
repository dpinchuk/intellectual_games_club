import sel from '../selectors/login-page.sel';
import exp from '../expected/login.exp';
import { assert } from 'chai';
import Base from './base';
import headSel from '../selectors/header.sel'

class Login extends Base {

    logoDisplayed() {
        $(sel.logo).isDisplayed();
    }

    formDisplayed() {
        $(sel.form).isDisplayed();
    }

    reminderTxtDisplayed() {
        $(sel.reminderTxt).isDisplayed();
    }

    logoAlignment() {
        let textAlign = $(sel.logo).getCSSProperty('text-align');
        assert.equal(textAlign.value, exp.logoAlign);
    }

    logoHeight() {
        let height = $(sel.logo).getCSSProperty('height');
        assert.equal(height.value, exp.logoHeight);
    }

    usernameDisplayed() {
        $(sel.email).isDisplayed();
    }

    passField() {
        $(sel.pass).isDisplayed();
    }

    loginBtn() {
        $(sel.btnLogin).isDisplayed();
    }

    remindPassBtn() {
        $(sel.btnReminder).isDisplayed();
    }

    userPlaceholder() {
        let userPlacehold = $(sel.email).getAttribute('placeholder');
        assert.equal(userPlacehold, exp.usernamePlaceholder);
    }

    passPlaceholder() {
        let pPlace = $(sel.pass).getAttribute('placeholder');
        assert.equal(pPlace, exp.passPlaceholder);
    }

    loginBtnBgc() {
        let bgc = $(sel.btnLogin).getCSSProperty('background-color');
        assert.equal(bgc.value, exp.btnLoginBg);
    }

    loginBtnText() {
        let lbt = $(sel.btnLogin).getText();
        assert.equal(lbt, exp.btnLoginTxt);
    }

    loginBtnTextColor() {
        let textColor = $(sel.btnLogin).getCSSProperty('color');
        assert.equal(textColor.value, exp.btnLoginClr);
    }

    remindPassBtnBgc() {
        let backGroundColor = $(sel.btnReminder).getCSSProperty('background-color');
        assert.equal(backGroundColor.value, exp.btnRemindBg);
    }

    remindBtnText() {
        let remindButtonText = $(sel.btnReminder).getText();
        assert.equal(remindButtonText, exp.btnRemindTxt);
    }

    remindBtnTextColor() {
        let textColor = $(sel.btnReminder).getCSSProperty('color');
        assert.equal(textColor.value, exp.btnRemindClr);
    }

    errorEmpty() {
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
    }

    errorPassEmpty() {
        $(sel.email).setValue(this.randomString(15));
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
    }

    errorUsernameEmpty() {
        $(sel.pass).setValue(this.randomString(15));
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
    }

    errorAlign() {
        $(sel.btnLogin).click();
        let error = $(sel.errorText).getCSSProperty('text-align').value;
        assert.equal(error, exp.errorAlign);
    }

    errorColor() {
        assert.equal($(sel.errorText).getCSSProperty('color').parsed.rgba, exp.userNotExistColor);
    }

    errorLocated() {
        $(sel.btnLogin).click();
        let pass = $(sel.pass).getLocation('y');
        let login = $(sel.btnLogin).getLocation('y');
        let error = $(sel.errorText).getLocation('y');
        assert.isTrue(login > error && error > pass);
    }

    errorSize() {
        $(sel.btnLogin).click();
        let error = $(sel.errorText).getCSSProperty('font-size').parsed.value / 16
        assert.equal(error, exp.errorSize);
    }

    errorFont() {
        $(sel.btnLogin).click();
        let error = $(sel.errorText).getCSSProperty('font-family').parsed.value[2];
        assert.equal(error, exp.errorFont);
    }

    usernameMinField() {
        let randomStr = this.randomString(1);
        $(sel.email).setValue(randomStr);
        let len = $(sel.email).getValue().length;
        assert.equal(len, exp.usernameMinLength);
    }

    passMinField() {
        let randomStr = this.randomString(1);
        $(sel.pass).setValue(randomStr);
        let len = $(sel.pass).getValue().length;
        assert.equal(len, exp.passMinLength);
    }

    usernameMaxField() {
        let randomStr = this.randomString(100);
        $(sel.email).setValue(randomStr);
        let len = $(sel.email).getValue().length;
        assert.equal(len, exp.usernameMaxLength);
    }

    passMaxField() {
        let randomStr = this.randomString(100);
        $(sel.pass).setValue(randomStr);
        let len = $(sel.pass).getValue().length;
        assert.equal(len, exp.passMaxLength);
    }

    usernameOverField() {
        let randomStr = this.randomString(101);
        $(sel.email).setValue(randomStr);
        let len = $(sel.email).getValue().length;
        assert.equal(len, exp.usernameMaxLength);
    }

    passOverField() {
        let randomStr = this.randomString(101);
        $(sel.pass).setValue(randomStr);
        let len = $(sel.pass).getValue().length;
        assert.equal(len, exp.passMaxLength);
    }

    copyPastOff() {
        let pass = $(sel.pass).getAttribute('type');
        assert.equal(pass, 'password')
    }

    userNotExistDisplayed() {
        let username = this.randomString(15);
        let pas = this.randomString(15);
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
    }

    userNotExistText() {
        assert.equal($(sel.errorText).getText(), exp.userNotExistText);
    }

    userNotExistColor() {
        assert.equal($(sel.errorText).getCSSProperty('color').parsed.rgba, exp.userNotExistColor);
    }

    passIncorrect() {
        let username = 'moderator';
        let pas = this.randomString(15);
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
    }

    passIncorrectText() {
        assert.equal($(sel.errorText).getText(), exp.passIncorrectText);
    }

    passIncorrectColor() {
        assert.equal($(sel.errorText).getCSSProperty('color').parsed.rgba, exp.passIncorrectColor);
    }

    usernameChange() {
        $(sel.email).setValue("1");
        $(sel.errorText).waitForDisplayed(3000, true)
    }

    passChange() {
        let username = this.randomString(15);
        let pas = this.randomString(15);
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
        $(sel.pass).setValue("1");
        $(sel.errorText).waitForDisplayed(3000, true)
    }

    remindBtnFunc() {
        $(sel.btnReminder).click();
        let titlePage = browser.getUrl();
        assert.equal(titlePage, exp.urlRemind);
        $(headSel.logInBtn).click();
        $(sel.logo).waitForDisplayed();
    }

    responseSpinner() {
        $(sel.email).setValue(this.randomString(100));
        $(sel.pass).setValue(this.randomString(100));
        $(sel.btnLogin).click();
        $(sel.spinner).waitForDisplayed(600);
    }

}

export default new Login();