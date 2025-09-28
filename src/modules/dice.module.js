import {Module} from '../core/module'
import { getRandom } from '../utils'
import diceSoundUrl from '@/assets/diceSound.mp3';

export class DiceModule extends Module {
    constructor(){
        super("dice", "Игральная Кость")
    }

    trigger(){
        this.playDiceSound();
        const diceContainer = document.createElement("div")
        const container = document.querySelector('.container');
        container.append(diceContainer)
        diceContainer.className = "diceContainer"

        const dice = document.createElement('div')
        dice.className = "dice"
        dice.dataset.point = "dice"
        diceContainer.append(dice)

        switch(getRandom(1, 6)){
            case 1:
                this.createOnePoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, Number(localStorage.getItem('inputDice'))*1000 || 5000);
                break;
            case 2:
                this.createTwoPoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, Number(localStorage.getItem('inputDice'))*1000 || 5000);
                break;
            case 3:
                this.createThreePoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, Number(localStorage.getItem('inputDice'))*1000 || 5000);
                break;
            case 4:
                this.createFourPoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, Number(localStorage.getItem('inputDice'))*1000 || 5000);
                break;
            case 5:
                this.createFivePoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, Number(localStorage.getItem('inputDice'))*1000 || 5000);
                break;
            case 6:
                this.createSixPoint();
                setTimeout(() => {
                    diceContainer.remove()
                }, Number(localStorage.getItem('inputDice'))*1000 || 5000);
                break;
        }

    }
    playDiceSound() {
        if (!this.diceAudio) this.diceAudio = new Audio(diceSoundUrl);
        this.diceAudio.currentTime = 0;
        this.diceAudio.play();
    }

    createOnePoint(){
        this.createPoint("center")
    }

    createPoint(position){
        const point = document.createElement('div')
        point.classList.add("point", position)
        const dice = document.querySelector(".dice");
        dice.append(point)
    }

    createTwoPoint(){
        this.createPoint("top-left")
        this.createPoint("bottom-right")
    }

    createThreePoint(){
        const positions = ["center", "top-left", "bottom-right"]
        positions.forEach(pos => this.createPoint(pos))
    }

    createFourPoint(){
        const positions = ["top-right", "top-left", "bottom-right", "bottom-left"]
        positions.forEach(pos => this.createPoint(pos))
    }

    createFivePoint() {
        const positions = ["center", "top-left", "bottom-right", "top-right", "bottom-left"]
        positions.forEach(pos => this.createPoint(pos))
    }

    createSixPoint(){
        const positions = ["top-left", "bottom-right" , "top-right", "bottom-left", "middle-right", "middle-left"]
        positions.forEach(pos => this.createPoint(pos))
    }
}