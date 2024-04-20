

import template from './InputForm.hbs?raw';
import {BaseComponent, PropsAndChildren} from "../../../utils/BaseComponent.ts";

export class InputForm extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}