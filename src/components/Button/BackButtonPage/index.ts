

import template from './BackButtonPage.hbs?raw';
import {BaseComponent, PropsAndChildren} from "../../../utils/BaseComponent.ts";

export class BackButtonPage extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}