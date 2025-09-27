import './styles.css'
import { ContextMenu } from "./menu";
import { ShapeModule } from "./modules/shape.module";
import { AddTextModule } from "./modules/addText.module";

const createContainer = () => {
    const container = document.createElement("div");
    container.textContent = 'Зона контекстного меню'
    container.classList.add("container");
    document.body.append(container);
}

document.addEventListener('DOMContentLoaded', () => {
    createContainer();
    const menu = new ContextMenu('#menu');
    const randomShape = new ShapeModule();
    const text = new AddTextModule();
    menu.add(randomShape);
    menu.add(text)

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        if (event.target === document.querySelector('.container')) {
            menu.open(event.clientX, event.clientY);
        } else {
            menu.close();
        }
    });
})