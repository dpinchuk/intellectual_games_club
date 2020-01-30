import sel from '../selectors/continue-game.sel'
import exp from '../expected/continue-game.exp';
import {assert} from 'chai';
import Base from './base';


class ContinueGame extends Base {

    tableIsDisplayed() {
        $(sel.table).isDisplayed();
    }

    gamesInProgress() {
        let tbodyList = $$(sel.tbody);
        console.log('gamesInProgress -> size = ' + tbodyList.length);
        if (tbodyList.length === 0) {
            assert.equal(exp.continueGamePageIfNoGamesInProgressAvailable, this.read(sel.noGamesInProgress));
            assert.equal(exp.continueGamePageTableHeaderContentTextAlign, this.getStyleValue(sel.noGamesInProgress, 'text-align'));
            assert.equal(exp.continueGamePageTableHeaderContentFontSize, this.getStyleValue(sel.noGamesInProgress, 'font-size'));
            assert.equal(exp.continueGamePageTableHeaderContentFontWeight, this.getStyleValue(sel.noGamesInProgress, 'font-weight'));
            assert.equal(exp.continueGamePageTableHeaderContentFontColor, this.getStyleValue(sel.noGamesInProgress, 'color'));
        } else {
            $(sel.table).isDisplayed();
        }
    }

    tableHeaderIsDisplayed() {
        $(sel.thead).isDisplayed();
    }

    tableHeaderStructure() {
        let thList = $$(sel.tr);
        if (thList.length !== 0) {
            assert.equal(exp.continueGamePageHeaderRaws, thList.length);
        } else {
            console.log('Table items empty!');
        }
    }


    tableHeaderItemsHasStyles() {
        let thList = $$(sel.tr);
        if(thList.length !== 0) {
            thList.forEach(item => {
                assert.equal(exp.continueGamePageTableHeaderFontColor, this.getStyleValue(item, 'color'));
                assert.equal(exp.continueGamePageTableHeaderBackgroundColor, this.getStyleValue(item, 'background-color'));
                assert.equal(exp.continueGamePageTableHeaderBorderColor, this.getStyleValue(item, 'border-color'));
                assert.equal(exp.continueGamePageTableHeaderTextAlign, this.getStyleValue(item, 'text-align'));
                assert.equal(exp.continueGamePageTableHeaderFontSize, this.getStyleValue(item, 'font-size'));
                assert.equal(exp.continueGamePageTableHeaderFontWeight, this.getStyleValue(item, 'font-weight'));
            });
        }
    }
}

export default new ContinueGame();