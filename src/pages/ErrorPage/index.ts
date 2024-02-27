import {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './ErrorPage.hbs?raw'

export  class ErrorPage extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({ ...propsAndChildren });
    }

    render() {
        console.log( this.propsAndChildren)
        return this.compile(template, this.propsAndChildren);
    }
}