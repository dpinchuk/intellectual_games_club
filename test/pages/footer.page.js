import sel from '../selectors/footer-page.sel'
import exp from '../expected/footer.exp';
import {assert} from 'chai';
import Base from './base';

class Footer extends Base {
    
    footerIsDisplayed() {
        $(sel.footer).isDisplayed();
    }

    verifyBgColor() {
       let bc = $(sel.footer).getCSSProperty('background-color');
       assert.equal(bc.value, exp.footerBgColor);
    }

    textIsDisplayed() {
        $(sel.footerText).isDisplayed();
    }

    versionTextIsDisplayed() {
        $(sel.footerVersionText).isDisplayed();
    }

    textContainsName() {
        let name = $(sel.footerText).getText();
        assert.equal(name, exp.footerTextName);
    }

    versionTextContainsName() {
        let name = $(sel.footerVersionText).getText();
        assert.isTrue(name.includes(exp.footerVersionTextName));
    }

    copyrightTextColor() {
        let tc = $(sel.footerText).getCSSProperty('color');
        assert.equal(tc.value, exp.copyrightTextColor);
    }

    copyrightTextSize() {
        let ts = $(sel.footerText).getCSSProperty('font-size');
        assert.equal(ts.value, exp.copyrightTextSize);
    }

    appVersionTextColor() {
        let avc = $(sel.footerVersionText).getCSSProperty('color');
        assert.equal(avc.value, exp.appVersionColor);
    }

    appVersionTextSize() {
        let avs = $(sel.footerVersionText).getCSSProperty('font-size');
        assert.equal(avs.value, exp.appVersionSize);
    }
}

export default new Footer();