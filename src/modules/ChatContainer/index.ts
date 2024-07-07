import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './ChatContainer.hbs?raw';

export class ChatContainer extends BaseComponent {



    constructor(propsAndChildren: PropsAndChildren) {


        super({
            ...propsAndChildren,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren, });
    }
}