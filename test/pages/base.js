import data from '../data/login.username';
import loginSel from '../selectors/login-page.sel';
import headSel from '../selectors/header.sel';
import usersSel from '../selectors/users-page.sel';

class Base {

    openBase() {
        browser.url('/');
    }

    openForgot() {
        browser.url('/forgot');
    }

    moderLogin() {
        $(loginSel.email).setValue(data.moderLogin); //moderator login
        $(loginSel.pass).setValue(data.moderPass); //moderator pass
        $(loginSel.loginButton).click();
        $(usersSel.textWelcome).waitForExist(3000);
    }

    testLogin() {
        $(loginSel.email).setValue(data.testLogin); //test login
        $(loginSel.pass).setValue(data.testPass); //test pass
        $(loginSel.loginButton).click();
        $(headSel.logOutBtn).waitForExist(3000);
    }

    anyUserLogin(login, pass) { //call this function with two arguments (login, Password)
        $(loginSel.email).setValue(login); //you need to enter your login existing email
        $(loginSel.pass).setValue(pass); //correct pass
        $(loginSel.loginButton).click();
        $(headSel.logOutBtn).waitForExist(3000);
    }

    allPlayersBtnClick() {
        $(headSel.allPlayerBtn).click();
        //add waitForDisplay()
    }

    logoutBtnСlick() {
        $(headSel.logOutBtn).click();
        $(loginSel.logo).waitForDisplayed();
    }

    randomString(max) { //you need to set value for string length
        let str = '';
        for (let i = 1; i <= max; i++) {
            str += String.fromCharCode(Math.random() * (126 - 35) + 35)
        }
        return str
    }

    click(sel) {
        $(sel).click();
    }

}
export default Base;
