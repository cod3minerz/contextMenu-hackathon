import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor() {
    super("clicks", "Счётчик кликов");
    this._oneClick = this._oneClick.bind(this);
  }
  _oneClick() {
    this._count += 1;
  }

  trigger() {
    const sec = parseInt(prompt("Сколько секунд считать клики?", "3"), 10);

    if (Number.isNaN(sec) || sec <= 0) {
      alert("Введите число:");
      return;
    }

    this._count = 0;
    const ms = sec * 1000;
    const start = Date.now();

    document.addEventListener("click", this._oneClick);

    setTimeout(() => {
      document.removeEventListener("click", this._oneClick);
      const result = (Date.now() - start) / 1000;
      const clicksSecond = (this._count / result).toFixed(2);
      alert(
        `Результат:\n` +
          `Время: ${result.toFixed(2)} с \n` +
          `Количество кликов: ${this._count}\n` +
          `Скорость: ${clicksSecond} кликов/с`
      );
    }, ms);
  }
}
