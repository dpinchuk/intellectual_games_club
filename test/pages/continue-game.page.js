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
        console.log('gamesInProgress -> tbodyList.length = ' + tbodyList.length);
        if (tbodyList.length === 0) {
            assert.equal(exp.continueGamePageIfNoGamesInProgressAvailable, this.read(sel.noGamesInProgress));
            assert.equal(exp.continueGamePageTableHeaderContentTextAlign, this.getStyleValue(sel.noGamesInProgress, 'text-align'));
            assert.equal(exp.continueGamePageTableHeaderContentFontSize, this.getStyleValue(sel.noGamesInProgress, 'font-size'));
            assert.equal(exp.continueGamePageTableHeaderContentFontWeight, this.getStyleValue(sel.noGamesInProgress, 'font-weight'));
            assert.equal(exp.continueGamePageTableHeaderContentFontColor, this.getStyleValue(sel.noGamesInProgress, 'color'));
        } else {
            $(sel.table).isDisplayed();
            console.log('Table is not empty!');
        }
    }

    tableHeaderIsDisplayed() {
        $(sel.thead).isDisplayed();
    }

    tableHeaderStructure() {
        let thList = $$(sel.tr);
        console.log('tableHeaderStructure -> thList.length = ' + thList.length);
        if (thList.length === exp.tableRawsLength) {
            assert.equal(exp.tableRawsLength, thList.length);
        } else {
            console.log('Table is empty!');
        }
    }

    tableContentStructure() {
        let thList = $$(sel.tr);
        console.log('tableContentStructure -> thList.length = ' + thList.length);
        let thListText = [];
        if (thList.length === exp.headerContentItemsList.length) {
            thList.forEach(item => {
                thListText.push(this.read(item));
                return thListText;
            });

            assert.equal(exp.tableRawsLength, thList.length);
            assert.equal(exp.headerContentItemsList, thListText)

        } else {
            console.log('Table is empty!');
        }
    }

    tableContent() {
        let thList = $$(sel.tr);
        console.log('tableContent -> thList.length = ' + thList.length);
        if(thList.length === exp.tableRawsLength) {
            thList.forEach(item => {
                assert.equal(exp.continueGamePageTableHeaderContentBorderTop, this.getStyleValue(item, 'border-top'));
                assert.equal(exp.continueGamePageTableHeaderContentFontColor, this.getStyleValue(item, 'color'));
                assert.equal(exp.continueGamePageTableHeaderContentTextAlign, this.getStyleValue(item, 'text-align'));
                assert.equal(exp.continueGamePageTableHeaderContentFontSize, this.getStyleValue(item, 'font-size'));
                assert.equal(exp.continueGamePageTableHeaderContentFontWeight, this.getStyleValue(item, 'font-weight'));
            });
        } else {
            console.log('Table is empty!');
        }
    }

    tableContentID() {
        let thList = $$(sel.tr);
        console.log('tableContent -> thList.length = ' + thList.length);
        if(thList.length === exp.tableRawsLength) {
            thList.forEach(item => {
                assert.equal(exp.continueGamePageTableHeaderContentIdBorderTop, this.getStyleValue(item, 'border-top'));
                assert.equal(exp.continueGamePageTableHeaderContentIdFontColor, this.getStyleValue(item, 'color'));
                assert.equal(exp.continueGamePageTableHeaderContentIdTextAlign, this.getStyleValue(item, 'text-align'));
                assert.equal(exp.continueGamePageTableHeaderContentIdFontSize, this.getStyleValue(item, 'font-size'));
                assert.equal(exp.continueGamePageTableHeaderContentIdFontWeight, this.getStyleValue(item, 'font-weight'));
                assert.equal(exp.continueGamePageTableHeaderContentIdCursor, this.getStyleValue(item, 'cursor'));
                assert.equal(exp.continueGamePageTableHeaderContentIdTextDecoration, this.getStyleValue(item, 'text-decoration'));
            });
        } else {
            console.log('Table is empty!');
        }
    }

    tableHeaderItemsHasStyles() {
        let thList = $$(sel.tr);
        console.log('tableHeaderItemsHasStyles -> thList.length = ' + thList.length);
        if(thList.length === exp.tableRawsLength) {
            thList.forEach(item => {
                assert.equal(exp.continueGamePageTableHeaderFontColor, this.getStyleValue(item, 'color'));
                assert.equal(exp.continueGamePageTableHeaderBackgroundColor, this.getStyleValue(item, 'background-color'));
                assert.equal(exp.continueGamePageTableHeaderBorderColor, this.getStyleValue(item, 'border-color'));
                assert.equal(exp.continueGamePageTableHeaderTextAlign, this.getStyleValue(item, 'text-align'));
                assert.equal(exp.continueGamePageTableHeaderFontSize, this.getStyleValue(item, 'font-size'));
                assert.equal(exp.continueGamePageTableHeaderFontWeight, this.getStyleValue(item, 'font-weight'));
            });
        } else {
            console.log('Table is empty!');
        }
    }
}

export default new ContinueGame();