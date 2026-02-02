import type { CheckboxElementProps } from "../components/CheckboxElement";
import type { InputFormElementProps } from "../components/InputFormElement";
import CheckboxBuilder from "./Checkboxbuilder";
import type FormElement from "./FormElement";
import InputBuilder from "./InputBuilder";

export default class Builder {
    elements: FormElement [];
    constructor() {
        this.elements = [];
    }

    // sub-builders
    input(props: InputFormElementProps) {
        this.elements.push(new InputBuilder(props))
        return this;
    }

    checkbox(props: CheckboxElementProps) {
        this.elements.push(new CheckboxBuilder(props));
        return this;
    }

    build() {
        return this.elements.map(element => element.component);
    }
}