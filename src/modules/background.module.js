import { Module } from "../core/module";
import { getRandomColor } from "../utils";
export class BackgroundModule extends Module {
  constructor() {
    super(`background`, `Сменить цвет фона`);
  }
  trigger() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
  }
}
