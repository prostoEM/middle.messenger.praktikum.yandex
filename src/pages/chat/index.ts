import {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './chat.hbs?raw'

export  class ChatPage extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        super({ ...propsAndChildren });
    }

    render() {
        return this.compile(template, this.propsAndChildren);
    }
}