import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import { assert } from 'chai';
import Base from './base';

class Header extends Base {

    //header
    headerLocation() {
        let headerLoc = $(sel.header).getLocation('y');
        assert.equal(headerLoc, exp.headerLocation);
    }

    headerBgColor() {
        let bColor = $(sel.header).getCSSProperty('background-color');
        assert.equal(bColor.value, exp.headerBgColor);
    }

    headerHasTwoBtn() {
        let length = $(sel.header).$$(sel.allBtnTag).length
        assert.equal(length, exp.numberOfBtn);
    }

    //Login player btn

    loginBtnAlign() {
        let headerLeft = $(sel.header).getSize('width') / 2;
        let elem = $(sel.loginBtn).getLocation('x');
        let btnSize = $(sel.loginBtn).getSize('width') / 2;
        let btnAlign = (headerLeft - elem - btnSize) > 0;
        assert.isTrue(btnAlign)
    }

    loginBtnBgColor() {
        let elem = $(sel.loginBtn).getCSSProperty('background-color').parsed.hex;
        assert.equal(elem, exp.loginBtnBgColor);
    }

    loginBtnText() {
        let textHTML = $(sel.loginBtn).getText();
        assert.equal(textHTML, exp.loginBtnText);
    }

    loginBtnTextColor() {
        let elem = $(sel.loginBtn).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.loginBtnTextColor);
    }

    loginBtnFontSize() {
        let fontSize = $(sel.loginBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.loginBtnFontSize);
    }

    loginBtnFont() {
        let fontSize = $(sel.loginBtn).getCSSProperty('font-family').parsed.value[2];
        assert.equal(fontSize, exp.loginBtnFont);
    }

    loginClickRedirect() {
        $(sel.loginBtn).click();
        assert.equal(browser.getUrl(), exp.baseUrl);
    }

    loginBtnNotExist() {
        let elem = $(sel.loginBtn).isExisting();
        assert.isFalse(elem);
    }

    // All Player Button

    allPlayerBtnAlign() {
        let headerCenter = $(sel.header).getSize('width') / 2;
        let elem = $(sel.allPlayerBtn).getLocation('x');
        let btnSize = $(sel.allPlayerBtn).getSize('width') / 2;
        let diff = headerCenter - btnSize - elem;
        assert.isTrue(diff < 1 && diff > -1)
    }

    allPlayerBtnBgColor() {
        let elem = $(sel.allPlayerBtn);
        assert.equal(elem.getCSSProperty('background-color').parsed.hex, exp.allPlayerBtnBgColor);
    }

    allPlayersBtnText() {
        let text = $(sel.allPlayerBtn).getText();
        assert.equal(text, exp.allPlayerBtnText);
    }

    allPlayersBtnTextColor() {
        let elem = $(sel.allPlayerBtn).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.allPlayerBtnTextColor);
    }

    allPlayersBtnFontSize() {
        let fontSize = $(sel.allPlayerBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.allPlayerBtnFontSize);
    }

    allPlayersBtnFont() {
        let font = $(sel.allPlayerBtn).getCSSProperty('font-family').parsed.value[2];
        assert.equal(font, exp.allPlayerBtnFont);
    }

    allPlayersBtnRedirect() {
        $(sel.allPlayerBtn).click();
        assert.equal(browser.getUrl(), exp.redirectUrl);
    }

    //Header For regular user

    welcomeTextInstedLoginBtn() {
        let res;
        ($(sel.loginBtn).isDisplayed !== true) && ($(sel.welcomeText).isDisplayed) ?
            res = true : res = false;
        assert.isTrue(res);
    }

    welcomeTextFontSize() {
        let size = $(sel.welcomeText).getCSSProperty('font-size').value;
        assert.equal(size, exp.welcomeTextFontSize);
    }

    welcomeTextText() {
        let text = $(sel.welcomeText).getText();
        assert.equal(text, exp.welcomeTextText);
    }

    welcomeTextFontColor() {
        let color = $(sel.welcomeText).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.welcomeTextFontColor);
    }

    welcomeConstantTextWeight() {
        let weight = $(sel.welcomeText).getCSSProperty('font-weight').value;
        assert.equal(weight, exp.welcomeTextFontWeight);
    }

    nickNameTextWeight() {
        let fontSize = $(sel.nickNameText).getCSSProperty('font-weight').value;
        assert.equal(fontSize, exp.nicnameTextBold);
    }
    // My Account Btn

    myAccountBtnAlign() {
        let allPlayerBtnAlign = $(sel.allPlayerBtn).getSize('width') + $(sel.allPlayerBtn).getLocation('x');
        let elemPixfirst = $(sel.accountBtn).getLocation('x');
        let elemPixlast = $(sel.accountBtn).getSize('width') + elemPixfirst;
        let logoutBtnAlign = $(sel.logOutBtn).getLocation('x');
        assert.isTrue(elemPixfirst > allPlayerBtnAlign && elemPixlast < logoutBtnAlign)
    }

    myAccountBtnIsExist() {
        let btnExist = $(sel.accountBtn).isDisplayed();
        assert.isTrue(btnExist);
    }

    myAccountBtnBgColor() {
        let elem = $(sel.accountBtn);
        assert.equal(elem.getCSSProperty('background-color').parsed.hex, exp.allPlayerBtnBgColor);
    }

    myAccountBtnText() {
        let text = $(sel.accountBtn).getText();
        assert.equal(text, exp.myAccountBtnText);
    }

    myAccountBtnTextColor() {
        let elem = $(sel.accountBtn).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.allPlayerBtnTextColor);
    }

    myAccountBtnFontSize() {
        let fontSize = $(sel.accountBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.allPlayerBtnFontSize);
    }

    myAccountBtnFont() {
        let font = $(sel.accountBtn).getCSSProperty('font-family').parsed.value[2];
        assert.equal(font, exp.allPlayerBtnFont);
    }

    myAccountBtnRedirect() {
        $(sel.accountBtn).click();
        $(sel.myAccountRedirectUniqueId).waitForDisplayed(3000)
    }

    //Logout Btn

    logoutBtnAlign() {
        let headerRight = $(sel.header).getSize('width') / 3 * 2;
        let elem = $(sel.loginBtn).getLocation('x');
        let btnAlign = (headerRight < elem);
        assert.isTrue(btnAlign)
    }

    logoutBtnBgColor() {
        let elem = $(sel.logOutBtn).getCSSProperty('background-color').parsed.hex;
        assert.equal(elem, exp.loginBtnBgColor);
    }

    logoutBtnText() {
        let textHTML = $(sel.logOutBtn).getText();
        assert.equal(textHTML, exp.logoutBtnText);
    }

    logoutBtnTextColor() {
        let elem = $(sel.logOutBtn).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.loginBtnTextColor);
    }

    logoutBtnFontSize() {
        let fontSize = $(sel.logOutBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.loginBtnFontSize);
    }

    logoutBtnFont() {
        let fontSize = $(sel.logOutBtn).getCSSProperty('font-family').parsed.value[2];
        assert.equal(fontSize, exp.loginBtnFont);
    }

    logoutClickRedirect() {
        $(sel.logOutBtn).click();
        assert.equal(browser.getUrl(), exp.baseUrl);
    }

}

export default new Header();