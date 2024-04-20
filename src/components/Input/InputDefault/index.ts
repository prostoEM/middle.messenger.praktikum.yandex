

import template from './InputDefault.hbs?raw';
import {BaseComponent, PropsAndChildren} from "../../../utils/BaseComponent.ts";

export class InputDefault extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}