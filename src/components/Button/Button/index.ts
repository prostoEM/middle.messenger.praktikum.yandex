

import template from './Button.hbs?raw';
import {BaseComponent, PropsAndChildren} from "../../../utils/BaseComponent.ts";

export class Button extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}