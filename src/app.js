import './styles.css'
import { ContextMenu } from "./menu";
import { ShapeModule } from "./modules/shape.module";



document.addEventListener('DOMContentLoaded', () => {
    const menu = new ContextMenu('#menu');
    const randomShape = new ShapeModule();
    menu.add(randomShape);

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        menu.open(event.clientX, event.clientY);
    });
})