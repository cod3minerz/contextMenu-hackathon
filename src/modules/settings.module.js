import {Module} from '../core/module'

export class SettingsModule extends Module {
    constructor(){
        super("settings", "Настройки")
    }

    createModal() {
        const dialog = document.createElement("dialog");
        const form = document.createElement("form");
        dialog.append(form);
        const header = document.createElement("h3");
        header.textContent = 'Настройки'
        form.append(header);

        const labelShape = document.createElement("label");
        labelShape.textContent = 'Длительность фигуры (сек)';
        const inputShape = document.createElement("input");
        inputShape.className = 'input-shape';
        inputShape.type = "number";
        labelShape.append(inputShape);
        form.append(labelShape);

        const labelText = document.createElement("label");
        labelText.textContent = 'Длительность текста (сек)';
        const inputText = document.createElement("input");
        inputText.className = 'input-text';
        inputText.type = "number";
        labelText.append(inputText);
        form.append(labelText);

        const labelTextSize = document.createElement("label");
        labelTextSize.textContent = 'Размер текста в пикселях';
        const inputTextSize = document.createElement("input");
        inputTextSize.className = 'input-size';
        inputTextSize.type = "number";
        labelTextSize.append(inputTextSize);
        form.append(labelTextSize);

        const labelDice = document.createElement("label");
        labelDice.textContent = 'Длительность игральных костей (сек)';
        const inputDice = document.createElement("input");
        inputDice.className = 'input-dice';
        inputDice.type = "number";
        labelDice.append(inputDice);
        form.append(labelDice);

        const buttonCursor = document.createElement("button");
        buttonCursor.className = "cursor"
        buttonCursor.textContent = 'Вернуть стандартный курсор';
        form.append(buttonCursor);

        const buttonBackground = document.createElement("button");
        buttonBackground.className = "background-btn"
        buttonBackground.textContent = 'Вернуть фон по умолчанию';
        form.append(buttonBackground);

        const button = document.createElement("button");
        button.className = "ok"
        button.textContent = 'OK';
        form.append(button);

        return dialog
    }

    trigger() {

        const dialog = this.createModal();
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) dialog.close();
        })
        document.body.append(dialog);
        dialog.showModal();

        const buttonCursor = document.querySelector(`.cursor`);
        if (buttonCursor) {
            buttonCursor.addEventListener('click', () => {
                const container = document.querySelector(".container");
                container.style.cursor = 'pointer';
            })
        }

        const buttonBackground = document.querySelector('.background-btn');
        if (buttonBackground) {
            buttonBackground.addEventListener('click', () => {
                document.body.style.backgroundColor = 'white';
            })
        }

        if (document.querySelector('.ok')) {
            const button = document.querySelector(".ok");
            button.addEventListener("click", () => {
                if (document.querySelector('.input-shape').value) {
                    localStorage.setItem('inputShape', `${(document.querySelector('.input-shape').value).trim()}`);
                }
                if (document.querySelector('.input-text').value) {
                    localStorage.setItem('inputText', `${(document.querySelector('.input-text').value).trim()}`);
                }
                if (document.querySelector('.input-size').value) {
                    localStorage.setItem('inputSize', `${(document.querySelector('.input-size').value).trim()}`);
                }
                if (document.querySelector('.input-dice').value) {
                    localStorage.setItem('inputDice', `${(document.querySelector('.input-dice').value).trim()}`);
                }
            })
        }
    }
}