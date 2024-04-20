import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './Avatar.hbs?raw';

export class Avatar extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}