import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './ZeroContent.hbs?raw';

export class ZeroContent extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}