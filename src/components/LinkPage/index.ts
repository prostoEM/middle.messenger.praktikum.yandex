import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './LinkPage.hbs?raw';

export class LinkPage extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}