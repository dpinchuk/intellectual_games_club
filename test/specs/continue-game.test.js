import continueGame from '../pages/continue-game.page';
import usersSel from '../selectors/users-page.sel';

describe('Continue-page', () => {

    it('Continue-page is displayed', () => {
        continueGame.openBase();
        continueGame.moderLogin();
        continueGame.click(usersSel.btnContinue);
        continueGame.tableIsDisplayed();
    });

    it('Table Header is displayed', () => {
        continueGame.tableHeaderIsDisplayed();
    });

    it('Table Header structure', () => {
        continueGame.tableHeaderStructure();
    });

    it('Table Header items has styles', () => {
        continueGame.tableHeaderItemsHasStyles();
    });

    it('No games in progress', () => {
        continueGame.gamesInProgress();
    });


});