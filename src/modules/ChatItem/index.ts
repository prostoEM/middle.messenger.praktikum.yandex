import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './ChatItem.hbs?raw';
import {Avatar} from "../../components/Avatar";
import {Badge} from "../../components/Badge";
import {Divider} from "../../components/Divider";

export class ChatItem extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        console.log(propsAndChildren)
        const avatar = new Avatar({src:propsAndChildren.src})
        const badge = new Badge({number:propsAndChildren.number})
        const divider = new Divider({})
        super({
            ...propsAndChildren,
            Avatar:avatar,
            Badge:badge,
            Divider:divider
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }
}