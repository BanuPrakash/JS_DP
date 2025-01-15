
import { CheckboxDefaultProps } from "./checkbox/CheckboxComponent";
import { InputDefault } from "./input";
import { InputDefaultProps } from "./input/InputDefaultComponent";
import { InputForm } from "./InputForm";
import { Checkbox } from "./checkbox";
import { ReactNode } from "react";
export class FormBuilder {
    private constructor(private readonly components: InputForm[]) {
    }

    static init(): FormBuilder {
        return new FormBuilder([]);
    }
    
    inputDefault(props: InputDefaultProps) : FormBuilder {
        this.components.push(new InputDefault(props));
        return this;
    }

    checkbox(props:CheckboxDefaultProps): FormBuilder {
        this.components.push(new Checkbox(props));
        return this;
    }
    //dropdown, switch

    build(): ReactNode [] {
        return this.components.map(c => c.component)
    }
}