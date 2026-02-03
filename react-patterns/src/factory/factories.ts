import { DarkButton, DarkCard } from "./DarkThemeComponents";
import type { ButtonComponent, CardComponent, UIAbstractFactory } from "./interfaces";
import { LightButton, LightCard } from "./LightThemeComponents";

export class LightThemeFactory implements UIAbstractFactory {
    createButton(): ButtonComponent {
        return LightButton
    }
    createCard(): CardComponent {
        return LightCard
    }
}



export class DarkThemeFactory implements UIAbstractFactory {
    createButton(): ButtonComponent {
        return DarkButton
    }
    createCard(): CardComponent {
        return DarkCard
    }
}