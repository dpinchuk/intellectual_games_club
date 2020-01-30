import footer from '../../pages/footer.page';

describe('Footer-page', () => {

    it('Footer is displayed', () => {
        footer.openBase();
        footer.footerIsDisplayed();
    });

    it('Footer BgColor', () => {
        footer.verifyBgColor();
    });

    it('Footer displayed', () => {
        footer.textIsDisplayed();
    });

    it('Footer version text is displayed', () => {
        footer.versionTextIsDisplayed();
    });

    it('Footer text contains name', () => {
        footer.textContainsName();
    });

    it('Footer version text contains name', () => {
        footer.versionTextContainsName();
    });

    it('Footer copyright text color has color', () => {
        footer.copyrightTextColor();
    });

    it('Footer copyright text size has size', () => {
        footer.copyrightTextSize();
    });

    it('Footer app version text color has color', () => {
        footer.appVersionTextColor();
    });

    it('Footer app version text size has size', () => {
        footer.appVersionTextSize();
    });

});