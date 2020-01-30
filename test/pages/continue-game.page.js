import sel from '../selectors/continue-game.sel'
import exp from '../expected/continue-game.exp';
import {assert} from 'chai';
import Base from './base';


class ContinueGame extends Base {

    tableIsDisplayed() {
        $(sel.table).isDisplayed();
    }

    gamesInProgress() {
        let tr = $$(sel.tbody);
        if (tr.length === 0) {
            assert.equal(exp.continueGamePageIfNoGamesInProgressAvailable, this.read(sel.noGamesInProgress));
            assert.equal(exp.continueGamePageTableHeaderContentTextAlign, this.getStyleValue(sel.noGamesInProgress, 'text-align'))
            assert.equal(exp.continueGamePageTableHeaderContentFontSize, this.getStyleValue(sel.noGamesInProgress, 'font-size'))
            assert.equal(exp.continueGamePageTableHeaderContentFontWeight, this.getStyleValue(sel.noGamesInProgress, 'font-weight'))
            assert.equal(exp.continueGamePageTableHeaderContentFontColor, this.getStyleValue(sel.noGamesInProgress, 'color'))
        } else {
            $(sel.table).isDisplayed();
        }
    }

    tableHeaderIsDisplayed() {
        $(sel.thead).isDisplayed();
    }

    tableHeaderStructure() {
        assert.equal(exp.continueGamePageHeaderRaws, $$(sel.tableHeaderRaws.length));
        assert.equal(exp.continueGamePageTableHeaderFontColor, this.getStyleValue(sel.thead, 'font-color'));
        assert.equal(exp.continueGamePageTableHeaderBackgroundColor, this.getStyleValue(sel.thead, 'background-color'));
        assert.equal(exp.continueGamePageTableHeaderBorderColor, this.getStyleValue(sel.thead, 'border-color'));
        assert.equal(exp.continueGamePageTableHeaderTextAlign, this.getStyleValue(sel.thead, 'text-align'));
        assert.equal(exp.continueGamePageTableHeaderFontSize, this.getStyleValue(sel.thead, 'font-size'));
        assert.equal(exp.continueGamePageTableHeaderFontWeight, this.getStyleValue(sel.thead, 'font-weight'));

    }
}

export default new ContinueGame();