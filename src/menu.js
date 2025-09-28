import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = [];
    this.$el = document.querySelector(selector);

    this.itemClicked = this.itemClicked.bind(this);
    this.$el.addEventListener("click", this.itemClicked);
    this.pos = { x: 0, y: 0 };
  }

  add(moduleItem) {
    const duplicate = this.modules.find((m) => m.type === moduleItem.type);
    if (duplicate) return;
    this.modules.push(moduleItem);
    this.$el.innerHTML = this.modules.map((m) => m.toHTML()).join("");
  }

  open(x, y) {
    this.$el.style.display = "block";
    this.$el.style.left = `${x}px`;
    this.$el.style.top = `${y}px`;
    this.pos.x = x;
    this.pos.y = y;
  }

  close() {
    this.$el.style.display = "none";
  }

  itemClicked(event) {
    const liItem = event.target.closest("[data-type]");
    if (!liItem) return;

    const type = liItem.dataset.type;
    const mod = this.modules.find((m) => m.type === type);

    if (mod) {
      if (mod.type === "test") {
        mod.trigger(this.pos.x, this.pos.y);
      } else mod.trigger();
    }
    this.close();
  }
}
