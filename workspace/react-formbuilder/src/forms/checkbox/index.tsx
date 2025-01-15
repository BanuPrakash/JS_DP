import { ReactNode } from "react";
import { InputForm } from "../InputForm";
import CheckboxComponent, { CheckboxDefaultProps } from "./CheckboxComponent";

export class Checkbox implements InputForm {
    component: ReactNode;
    constructor(props: CheckboxDefaultProps) {
        this.component = CheckboxComponent(props);
    }
}