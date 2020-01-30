import sel from '../selectors/users-page.sel';
import exp from '../expected/users.exp';
import { assert } from 'chai';
import Base from './base';

class Users extends Base {

    welcomeTextIsDisplayed() {
        $(sel.textWelcome).isDisplayed();
    }
}

export default new Users();