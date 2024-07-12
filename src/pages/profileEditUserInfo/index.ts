import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './profileEditUserInfo.hbs?raw';

export class ProfileEditUserInfo extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }
    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}