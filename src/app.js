import "./styles.css";
import "./dice.styles.css";
import { ContextMenu } from "./menu";
import { ShapeModule } from "./modules/shape.module";
import { AddTextModule } from "./modules/addText.module";
import {SettingsModule} from "./modules/settings.module";
import {DiceModule} from "./modules/dice.module";
import {CursorModule} from "./modules/cursor.module";
import {BackgroundModule} from "./modules/background.module";
import {ClicksModule} from "./modules/clicks.module";

const createContainer = () => {
  const container = document.createElement("div");
  container.textContent = "Зона контекстного меню";
  container.style.userSelect = "none";
  container.classList.add("container");
  document.body.append(container);
};

document.addEventListener('DOMContentLoaded', () => {
    createContainer();
    const menu = new ContextMenu('#menu');
    const randomShape = new ShapeModule();
    const text = new AddTextModule();
    const settings = new SettingsModule();
    const dice = new DiceModule();
    const cursor = new CursorModule();
    const background = new BackgroundModule();
    const clicks = new ClicksModule();
    menu.add(randomShape);
    menu.add(text);
    menu.add(dice);
    menu.add(cursor);
    menu.add(background);
    menu.add(clicks);
    menu.add(settings);

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (event.target === document.querySelector(".container")) {
      menu.open(event.clientX, event.clientY);
    } else {
      menu.close();
    }
  });
});
