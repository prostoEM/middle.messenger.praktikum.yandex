import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './profile.hbs?raw';

export class ProfileEditPassword extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }
    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}