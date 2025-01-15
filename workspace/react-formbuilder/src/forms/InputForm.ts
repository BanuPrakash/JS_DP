import { ReactNode } from "react";
import { InputDefaultProps } from "./input/InputDefaultComponent";
import { CheckboxDefaultProps } from "./checkbox/CheckboxComponent";

export interface InputForm {
    component: ReactNode
}

export enum COMPONENT_TYPE {
    DROPDOWN_INPUT = "dropdowninput",
    CHECKBOX = "checkbox",
    INPUT_DEFAULT = "inputdefault",
    SWITCH = "switch"
}

export type Property = {
    type: COMPONENT_TYPE,
    props: InputDefaultProps & CheckboxDefaultProps
}

export type Properties = Property[];