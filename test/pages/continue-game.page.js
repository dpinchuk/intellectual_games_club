import sel from './continue-game.sel'
import exp from '../expected/continue-game.exp';
import {assert} from 'chai';
import Base from './base';


class ContinueGame extends Base {

    tableIsDisplayed() {
        $(sel.table).isDisplayed();
    }
}

export default new ContinueGame();