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
            el.style.left = x + 'px';
            el.style.top = y + 'px';
            el.style.background = 'transparent';
            document.body.appendChild(el);
            setTimeout(() => {
                el.remove();
            }, 5000);
        }
    }
}