

import template from './InputSearch.hbs?raw';
import {BaseComponent, PropsAndChildren} from "../../../utils/BaseComponent.ts";

export class InputSearch extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}