import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.modules = [];
        this.$el = document.querySelector(selector);

        this.itemClicked = this.itemClicked.bind(this);
        this.$el.addEventListener('click', this.itemClicked);
    }

    add(moduleItem) {
        const duplicate = this.modules.find(m => m.type === moduleItem.type);
        if (duplicate) return;
        this.modules.push(moduleItem);
        this.$el.innerHTML = this.modules.map(m => m.toHTML()).join('');
    }

    open(x, y) {
        this.$el.style.display = 'block';
        this.$el.style.left = `${x}px`;
        this.$el.style.top = `${y}px`;
    }

    close() {
        this.$el.style.display = 'none';
    }

    itemClicked(event) {
        const liItem = event.target.closest('[data-type]');
        if (!liItem) return;

        const type = liItem.dataset.type;
        const mod = this.modules.find(m => m.type === type);

        if (mod) {
            mod.trigger();
        }
        this.close();
    }

}