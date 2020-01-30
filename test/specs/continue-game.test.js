import continueGame from '../pages/continue-game.page';
import usersSel from '../selectors/users-page.sel';

describe('Continue-page', () => {

    it('Continue-page is displayed', () => {
        continueGame.openBase();
        continueGame.moderLogin();
        continueGame.click(usersSel.btnContinue);
        continueGame.tableIsDisplayed();
    });

});