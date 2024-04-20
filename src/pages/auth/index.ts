import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './Auth.hbs?raw';

export class Auth extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }
    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}