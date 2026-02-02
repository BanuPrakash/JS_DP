import type { ReactNode } from "react";
import type FormElement from "./FormElement";
import type { InputFormElementProps } from "../components/InputFormElement";
import InputFormElement from "../components/InputFormElement";

export default class InputBuilder implements FormElement {
    component: ReactNode;
    constructor(props: InputFormElementProps) {
        this.component = InputFormElement(props);
    }
}