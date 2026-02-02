import type { ReactNode } from "react";
import type FormElement from "./FormElement";
import type { CheckboxElementProps } from "../components/CheckboxElement";
import CheckboxElement from "../components/CheckboxElement";

export default class CheckboxBuilder implements FormElement {
    component: ReactNode;
    constructor(props: CheckboxElementProps) {
        this.component = CheckboxElement(props);
    }
}