import {Module} from '../core/module'
import { getRandom } from '../utils'
import * as dice from '../services/dice.functions'

export class DiceModule extends Module {
    constructor(){
        super("dice", "Игральная Кость")
    }

    trigger(){
        const diceContainer = document.createElement("div")
        document.body.append(diceContainer)
        diceContainer.className = "diceContainer"

        const dice = document.createElement('div')
        dice.className = "dice"
        dice.dataset.point = "dice"
        diceContainer.append(dice)

        switch(getRandom(1, 6)){
            case 1:
                dice.createOnePoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, 5000);
                break;
            case 2:
                dice.createTwoPoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, 5000);
                break;
            case 3:
                dice.createThreePoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, 5000);
                break;
            case 4:
                dice.createFourPoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, 5000);
                break;
            case 5:
                dice.createFivePoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, 5000);
                break;
            case 6:
                dice.createSixPoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, 5000);
                break;
        }
    }
}

