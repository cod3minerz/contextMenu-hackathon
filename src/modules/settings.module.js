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
        header.textContent = 'Настройки (esc для выхода)'
        form.append(header);

        const labelShape = document.createElement("label");
        labelShape.textContent = 'Длительность фигуры секунд';
        const inputShape = document.createElement("input");
        inputShape.className = 'input-shape';
        inputShape.type = "number";
        labelShape.append(inputShape);
        form.append(labelShape);

        const labelText = document.createElement("label");
        labelText.textContent = 'Длительность текста секунд';
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
            })
        }
    }
}