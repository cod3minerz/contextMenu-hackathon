import './styles.css'
import { ContextMenu } from "./menu";
import { ShapeModule } from "./modules/shape.module";
import { AddTextModule } from "./modules/addText.module";


document.addEventListener('DOMContentLoaded', () => {
    const menu = new ContextMenu('#menu');
    const randomShape = new ShapeModule();
    const text = new AddTextModule();
    menu.add(randomShape);
    menu.add(text)

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        menu.open(event.clientX, event.clientY);
    });
})