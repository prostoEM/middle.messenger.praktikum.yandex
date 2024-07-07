import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './pagesLinks.hbs?raw';

export class PagesLinks extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({
            ...propsAndChildren,
        });
    }
    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}