import {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './errorPage.hbs?raw'

export  class ErrorPage extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({ ...propsAndChildren });
    }

    render() {

        return this.compile(template, this.propsAndChildren);
    }
}