import {Module} from '../core/module'

export class AddTextModule extends Module {
    constructor(){
        super("test", "Написать текст")
    }

    trigger(x, y) {
        const text = prompt('Enter text here: ').trim();
        if (text) {
            const el = document.createElement('div');
            el.textContent = text;
            el.style.position = 'absolute';
            el.style.fontSize = `${localStorage.getItem('inputSize')}px` || "30px";
            el.style.left = x + 'px';
            el.style.top = y + 'px';
            el.style.background = 'transparent';
            document.body.appendChild(el);
            setTimeout(() => {
                el.remove();
            }, Number(localStorage.getItem('inputText'))*1000 || 5000);
        }
    }
}