import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './Badge.hbs?raw';

export class Badge extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}