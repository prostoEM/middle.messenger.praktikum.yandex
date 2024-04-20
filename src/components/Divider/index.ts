import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './Divider.hbs?raw';

export class Divider extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}