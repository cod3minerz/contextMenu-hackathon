import {Module} from "../core/module";
import { getRandom } from "../utils";

export class CursorModule extends Module {
    constructor() {
        super("pointer", "Рандомный указатель");
    }

    trigger() {
        const cursorArray = ["help", "poiner", "progress", "wait", "cell",
            "crosshair", "text", "vertical-text", "alias", "copy", "move",
            "no-drop", "grab", "grabbing"];

        const container = document.querySelector(".container");
        container.style.cursor = cursorArray[getRandom(1, 14)];

    }

}